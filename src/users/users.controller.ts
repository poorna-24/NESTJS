import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  // Headers,
  // Ip,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  // // GET /users
  // @Get('/')
  // public getAllUsers(@Query('limit') limit: any) {
  //   console.log('id is undefined');
  //   console.log(limit);
  //   return `Get all users`;
  // }

  // // GET /users/:id
  // @Get('/:id')
  // public getUserById(@Param('id',ParseIntPipe) id: number | undefined, @Query('limit') limit: any) {
  //   console.log(typeof id);
  //   console.log( typeof limit);
  //   return `Get user by id`;
  // }

  @Get('/:id')
  // @Get('/:id/:pp')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    // @Param('pp',ParseIntPipe) pp:number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(id);
    // console.log(pp);

    // console.log(typeof id);
    console.log(typeof limit);
    console.log(typeof page);
    console.log('chandu');
    console.log(limit, page);
    //  console.log(typeof limit,limit)
    // console.log('chandu');
    return `You sent a get request to users endpoint with...........`;
  }

  // // GET /users5
  // @Get()
  // public getAllUsers(@Query('limit') limit: any) {
  //   console.log('id is undefined');
  //   console.log(limit);
  //   return `Get all users`;
  // }

  // @Get(':id')
  // public getUserss(@Param() params: any, @Query() query: any) {
  //   console.log(params);
  //   console.log(query);
  //   //  console.log(typeof limit,limit)
  //   // console.log('chandu');
  //   return `You sent a get request to users endpoint with...........`;
  // }

  @Post()
  public createUsers(
    @Body() createUserDto: CreateUserDto,
    // @Body(new ValidationPipe()) requestCreateUserDto: CreateUserDto,
    // @Headers() headers: any,
    // @Ip() ip: any,
  ) {
    // console.log(request);
    // console.log(requestCreateUserDto)
    console.log(createUserDto);
    // console.log(headers);
    // console.log(ip);
    return ' from POST createUsers';
  }

  // @Get('/:id/{:optional}')
  // public getUsers(
  //   @Param('id', ParseIntPipe) id: number | undefined,
  //   @Param('optional') optional?: number ,
  //   @Query('limit', ParseIntPipe) limit?: number,
  // ) {
  //   console.log(typeof id);
  //   console.log(typeof limit);
  //   console.log(optional);
  //   if (optional) {
  //     return `ID is ${id} and optional parameter is ${optional}`;
  //   } else {
  //     return `ID is ${id} and no optional parameter`;
  //   }
  // }

  // @Get('{/:da}')
  // public getUser() {
  //   return 'You sent a get request to user endpoint';
  // }
  // @Get('/:id/{:optional?}')
}
