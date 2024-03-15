import db from "@/lib/db";

import About from "@/models/About";
import mongoose from "mongoose";
export async function POST(req) {
    await db.connect();

    try {
        // Check if there is already an existing About item in the database
        const existingAbout = await About.findOne();

        if (existingAbout) {
            return new Response("Data already exists, and multiple entries are not allowed.", { status: 400 });
        }

        const body = await req.json();
        const newAbout = await About.create(body);

        return new Response(JSON.stringify(newAbout), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 });
    }
    
}

export async function GET(req) {
    await db.connect();

    try {
        // Retrieve the single About item from the database
        const aboutItem = await About.findOne();

        if (!aboutItem) {
            return new Response("No data found.", { status: 404 });
        }

        return new Response(JSON.stringify(aboutItem), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 });
    } 
}

export async function PUT(req) {
    await db.connect();

    try {
        const body = await req.json();
        
        // Find the single About item in the database
        const existingAbout = await About.findOne();

        if (!existingAbout) {
            return new Response("No data found to update.", { status: 404 });
        }

        // Update the single About item
        existingAbout.set(body);
        const updatedAbout = await existingAbout.save();

        return new Response(JSON.stringify(updatedAbout), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 });
    }
}
export async function DELETE(req) {
    await db.connect();

    try {
        const existingAbout = await About.findOne();

        if (!existingAbout) {
            return new Response("No data found to delete.", { status: 404 });
        }

        // Use deleteOne() to remove the document
        await existingAbout.deleteOne();

        return new Response(JSON.stringify(existingAbout), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify(null), { status: 500 });
    } 
}

