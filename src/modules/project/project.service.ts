import { Injectable } from '@nestjs/common';
import { GetProjectsQueryDTO } from './dto/get-projects-query.dto';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(query: GetProjectsQueryDTO) {
    const { search, status, page = 1, limit = 10 } = query;
    const skip = (page - 1) * limit;

    console.log('Query Parameters:', query);

    const filter: any = {};

    if (search) {
      filter.name = { contains: search };
    }
    if (status) {
      filter.status = status;
    }

    return this.prisma.project.findMany({
      where: filter,
      skip,
      take: limit,
      orderBy: { created_at: 'desc' },
    });
  }
}
