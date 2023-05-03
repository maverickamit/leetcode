//   Definition for singly-linked list.
class ListNode {
  val: number | null;
  next: ListNode | null;
  constructor(val?: number | null, next?: ListNode | null) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let pointer1 = list1;
  let pointer2 = list2;
  let mergedHead: ListNode | null = null,
    mergedNode: ListNode | null,
    prevMergedNode: ListNode | null = null;
  //The while loop stops when both pointer1 and pointer2 is null
  while (pointer1 || pointer2) {
    if (
      pointer1?.val !== undefined &&
      pointer1?.val !== null &&
      pointer2?.val !== undefined &&
      pointer2?.val !== null
    ) {
      if (pointer1?.val > pointer2?.val) {
        mergedNode = new ListNode(pointer2.val);
        pointer2 = pointer2.next;
        if (!mergedHead) {
          mergedHead = mergedNode;
        }
      } else {
        mergedNode = new ListNode(pointer1.val);
        pointer1 = pointer1?.next;
        if (!mergedHead) {
          mergedHead = mergedNode;
        }
      }
    } else if (pointer1?.val !== undefined && pointer1?.val !== null) {
      mergedNode = new ListNode(pointer1.val);
      pointer1 = pointer1?.next;
      if (!mergedHead) {
        mergedHead = mergedNode;
      }
    } else if (pointer2?.val !== undefined && pointer2?.val !== null) {
      mergedNode = new ListNode(pointer2?.val);
      pointer2 = pointer2.next;
      if (!mergedHead) {
        mergedHead = mergedNode;
      }
    } else {
      break;
    }
    if (prevMergedNode) prevMergedNode.next = mergedNode;
    prevMergedNode = mergedNode;
  }
  return mergedHead;
}
