# Definition for singly-linked list.
from typing import Optional
import unittest

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        ans= None

        while list1 or list2 :
            val1 = list1.val if list1 else list2.val+1
            val2 = list2.val if list2 else list1.val+1
            if val2<val1:
                curr_val = val2
                list2 = list2.next
            else:
                curr_val = val1
                list1 = list1.next
            if prev:
                prev.next = ListNode(curr_val)
                prev = prev.next
            else:
                prev = ListNode(curr_val)
                ans = prev

        return ans

class TestMergeTwoSortedLists(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()

    def list_to_linked_list(self, values):
        if not values:
            return None
        head = ListNode(values[0])
        current = head
        for val in values[1:]:
            current.next = ListNode(val)
            current = current.next
        return head

    def linked_list_to_list(self, node):
        result = []
        while node:
            result.append(node.val)
            node = node.next
        return result

    def test_merge_two_sorted_lists_basic(self):
        list1 = self.list_to_linked_list([1, 3, 5])
        list2 = self.list_to_linked_list([2, 4, 6])
        expected_output = [1, 2, 3, 4, 5, 6]
        merged_list = self.solution.mergeTwoLists(list1, list2)
        self.assertEqual(self.linked_list_to_list(merged_list), expected_output)

    # def test_merge_two_sorted_lists_with_duplicates(self):
    #     list1 = self.list_to_linked_list([1, 2, 2, 3])
    #     list2 = self.list_to_linked_list([2, 2, 4, 5])
    #     expected_output = [1, 2, 2, 2, 2, 3, 4, 5]
    #     merged_list = self.solution.mergeTwoLists(list1, list2)
    #     self.assertEqual(self.linked_list_to_list(merged_list), expected_output)

if __name__ == "__main__":
    unittest.main()