import type { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";
import type { PostOwner } from "@shared/models/post.model";

@Pipe({
  standalone: true,
  name: "ownerLink",
})
export class OwnerLinkPipe implements PipeTransform {
  transform(owner: PostOwner): string {
    if (!owner) {
      return "";
    }

    switch (owner.ownerType) {
      case "User":
        return `/profile/${owner.id}`;
      case "Community":
        return `/group/${owner.id}`;
      default:
        return "";
    }
  }
}
