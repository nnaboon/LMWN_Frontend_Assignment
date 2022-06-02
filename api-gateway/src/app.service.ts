import { HttpService } from '@nestjs/axios';
import {
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { Trip } from './models/trip';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getTripsByKeyword(keyword: string): Promise<Trip[]> {
    try {
      const res = await lastValueFrom(
        this.httpService.get('http://localhost:9000/trips'),
      );

      if (keyword) {
        return res.data.filter(
          (trip) =>
            trip.title.toLowerCase().includes(keyword) ||
            trip.description.toLowerCase().includes(keyword) ||
            trip.tags.some((tag) => tag.toLowerCase().includes(keyword)),
        );
      } else {
        return res.data;
      }
    } catch (error) {
      if (!error.response) {
        throw new InternalServerErrorException('Cannot connect to JSON server');
      } else {
        throw new HttpException(
          error.response.data.message,
          error.response.status,
        );
      }
    }
  }
}
