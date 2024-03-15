import db from "@/lib/db";
import Education from "../../../models/Education"

export async function POST(req) {
    await db.connect();
    
    try {
   
        const body = await req.json();
        const  newEvent = await Education.create(body);
     
    return new Response(JSON.stringify(newEvent), { status: 201 });
} catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
}

    
}

export async function GET(req) {
    await db.connect();

    try {
        const timelineData = await Education .find();
      
        return new Response(JSON.stringify(timelineData), { status: 200 });
      }  catch (error) {
        return new Response(JSON.stringify(null), { status: 500 });
    } 
}

export async function PUT(req) {
    await db.connect();


      try {
        const body = await req.json();
        
        // Find the single About item in the database
        const updatedEvent = await Education.findOne();

       
        // Update the single About item
        updatedEvent.set(body);
        const updated = await updatedEvent.save();

        return new Response(JSON.stringify(updated), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 });
    }
}
export async function DELETE(req) {
    await db.connect();

   
  
    try {
        const existingTimeline = await  Education.findOne();

   
        await existingTimeline.deleteOne();

        return new Response(JSON.stringify(existingTimeline), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify(null), { status: 500 });
    } 
}



