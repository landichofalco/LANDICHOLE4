import type { Post } from './post.model';

describe('Post', () => {
  it('should be assignable to Post', () => {
    const post = {} as Post;
    expect(post).toBeTruthy();
  });
});
