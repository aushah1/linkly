import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const collection = client.db("Linkly").collection("url");
    const urls = await collection.find({}).toArray();

    return Response.json({ success: true, data: urls });
  } catch (error) {
    return Response.json({ success: false, error: error.message });
  }
}
