import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';
import { FeedModule } from './feed/feed.module';
import { FollowsModule } from './follows/follows.module';
import { LikesModule } from './likes/likes.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PostsModule,
    FollowsModule,
    FeedModule,
    LikesModule,
    CommentsModule
  ]
})
export class AppModule {}
