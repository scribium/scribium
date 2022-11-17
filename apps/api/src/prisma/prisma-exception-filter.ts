import {
	Catch,
	ConflictException,
	InternalServerErrorException,
} from '@nestjs/common';
import { ExceptionFilter } from '@nestjs/common/interfaces';
import { Prisma } from '@prisma/client';

type PrismaError = Prisma.PrismaClientKnownRequestError;

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter<PrismaError> {
	catch(exception: PrismaError) {
		switch (exception.code) {
			case 'P2002':
				const target = exception.meta?.target as string[];
				const message = `${target.join(', ')} ${
					target.length === 1 ? 'is' : 'are'
				} already in use.`;

				throw new ConflictException(
					message.charAt(0).toUpperCase() + message.slice(1)
				);
			default:
				throw new InternalServerErrorException();
		}
	}
}
