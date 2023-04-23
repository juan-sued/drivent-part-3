import { prisma } from '@/config';

export async function createBooking() {
  return prisma.booking.create({
    data: {
      userId: 1,
      roomId: 1,
    },
  });
}
