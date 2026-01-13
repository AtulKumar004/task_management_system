import { Controller, Get, Query } from '@nestjs/common';
import { ProjectService } from './project.service';
import { GetProjectsQueryDTO } from './dto/get-projects-query.dto';

@Controller('project')
export class ProjectController {
  // Inject ProjectService via constructor
  constructor(private readonly projectService: ProjectService) {}

  // Define your endpoints here

  @Get()
  findAll(@Query() query: GetProjectsQueryDTO) {
    /**
     * Feature: Get all projects
     * search by name, filter by status, pagination
     */
    return this.projectService.findAll(query);
  }
}
