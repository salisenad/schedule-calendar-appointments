import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileObject {
  @Field()
  firstname!: string;

  @Field()
  name!: string;

  @Field()
  phone!: string;

  @Field()
  gender!: string;

  @Field()
  title!: string;
}
