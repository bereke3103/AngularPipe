import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'search',
  pure: false,
})
export class SearchingPipe implements PipeTransform {
  transform(posts: Post[], search: string, searhcField: keyof Post = 'title') {
    if (!search.trim()) {
      return posts;
    }

    return posts.filter((post) => {
      // !1ПЕРВЫЙ СПОСОБ
      // return post.title
      //   .toLocaleLowerCase()
      //   .includes(search.toLocaleLowerCase());
      // !2ВТОРОЙ СПОСОБ
      return post[searhcField]
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
    });
  }
}
