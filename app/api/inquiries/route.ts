import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, lookingFor, budgetRange, location, message, source } = body

    if (!name || (!phone && !email)) {
      return NextResponse.json(
        { error: 'Name and at least a Phone or Email are required.' },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const dbName = process.env.MONGODB_DB || 'avm_realty'
    const db = client.db(dbName)
    const collection = db.collection('inquiries')

    const newInquiry = {
      name: name.trim(),
      phone: phone ? phone.trim() : null,
      email: email ? email.trim() : null,
      lookingFor: lookingFor || 'Residential',
      budgetRange: budgetRange || 'Not Specified',
      location: location ? location.trim() : null,
      message: message ? message.trim() : null,
      source: source || 'Homepage Quick Callback Form',
      createdAt: new Date(),
      status: 'NEW',
    }

    const result = await collection.insertOne(newInquiry)

    return NextResponse.json({
      success: true,
      message: 'Inquiry saved successfully.',
      insertedId: result.insertedId,
    })
  } catch (error: any) {
    console.error('Error saving inquiry to MongoDB:', error)
    return NextResponse.json(
      { error: 'Database connection or insertion failed.', details: error.message },
      { status: 500 }
    )
  }
}
