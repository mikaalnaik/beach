import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { getTorontoReadings } from 'src/utils/beaches/get-beaches';
import { getLastTorontoBeachUpdate } from 'src/utils/beaches/get-latest';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const beachID = req.query.beachID as string;
  const data = (await sql`SELECT * FROM beach_readings WHERE beach_id = ${beachID} ORDER BY date DESC;`).rows;
  res.send({ data })
}