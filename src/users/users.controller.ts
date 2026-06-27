import { Controller, Get, Post, Param, Query, Body , Headers , Ip} from '@nestjs/common';

@Controller('users')
export class UsersController {
  
  @Get(':id')
  public getUsers(@Param() params: any, @Query() query:any) {
    console.log(params);
    console.log(query);
      //  console.log(typeof limit,limit)
    // console.log('chandu');
    return `You sent a get request to users endpoint with...........`;
  }

  @Post()
  public createUsers(@Body() request:any, @Headers() headers:any, @Ip() ip:any) {
    console.log(request)
    console.log(headers)
    console.log(ip)
    return ' from POST';
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
