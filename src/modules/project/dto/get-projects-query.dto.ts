import { Type } from 'class-transformer';
import { IsOptional, IsString, IsEnum, IsInt, Min } from 'class-validator';

enum ProjectStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
  ONHOLD = 'ONHOLD',
}
export class GetProjectsQueryDTO {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsEnum(ProjectStatus, {
    message: 'status must be one of ACTIVE, COMPLETED, PENDING, ONHOLD',
  })
  status?: ProjectStatus;

  @IsOptional()
  @Type(() => Number) // Transform query param to number
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number) // Transform query param to number
  @IsInt()
  @Min(1)
  limit?: number = 10;
}
