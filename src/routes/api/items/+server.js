import { json } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export async function GET() {
    const items = await prisma.item.findMany();
    return json(items);
}
