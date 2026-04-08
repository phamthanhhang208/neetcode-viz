import type { Problem } from '../types';

const reverseLinkedList: Problem = {
  id: 'reverse-linked-list',
  name: 'Reverse Linked List',
  number: 206,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/reverse-linked-list/',
  description: 'Given the head of a singly linked list, reverse the list and return the reversed list.',
  vizTypes: ['linked-list'],
  language: 'python',
  testInput: 'head = [1, 2, 3, 4, 5]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Iterative Pointer Reversal',
  hints: [
    'Use three pointers: prev, curr, and next.',
    'At each step, reverse the current node\'s pointer to point to prev.',
    'Move all three pointers one step forward after each reversal.',
  ],
  code: `def reverseList(head):
    prev = None
    curr = head
    while curr:
        next_node = curr.next
        curr.next = prev
        prev = curr
        curr = next_node
    return prev`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Start with linked list 1 -> 2 -> 3 -> 4 -> 5. We will reverse it using prev, curr, and next pointers.',
      viz: {
        linkedList: {
          nodes: [
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
            { value: 5, id: 'n5' },
          ],
          pointers: { prev: '', curr: 'n1' },
        },
        variables: { prev: 'null', curr: 'node(1)' },
      },
    },
    {
      line: 4,
      label: 'Reverse n1',
      message: 'Save next = node(2). Reverse curr.next: node(1).next = null (prev). Now node(1) points to nothing.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
            { value: 5, id: 'n5' },
          ],
          pointers: { prev: 'n1', curr: 'n2' },
          highlighted: ['n1'],
        },
        variables: { prev: 'node(1)', curr: 'node(2)', next: 'node(2)' },
      },
    },
    {
      line: 4,
      label: 'Reverse n2',
      message: 'Save next = node(3). Reverse curr.next: node(2).next = node(1). Now 2 -> 1.',
      viz: {
        linkedList: {
          nodes: [
            { value: 2, id: 'n2' },
            { value: 1, id: 'n1' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
            { value: 5, id: 'n5' },
          ],
          pointers: { prev: 'n2', curr: 'n3' },
          highlighted: ['n2', 'n1'],
        },
        variables: { prev: 'node(2)', curr: 'node(3)', next: 'node(3)' },
      },
    },
    {
      line: 4,
      label: 'Reverse n3',
      message: 'Save next = node(4). Reverse curr.next: node(3).next = node(2). Now 3 -> 2 -> 1.',
      viz: {
        linkedList: {
          nodes: [
            { value: 3, id: 'n3' },
            { value: 2, id: 'n2' },
            { value: 1, id: 'n1' },
            { value: 4, id: 'n4' },
            { value: 5, id: 'n5' },
          ],
          pointers: { prev: 'n3', curr: 'n4' },
          highlighted: ['n3', 'n2', 'n1'],
        },
        variables: { prev: 'node(3)', curr: 'node(4)', next: 'node(4)' },
      },
    },
    {
      line: 4,
      label: 'Reverse n4',
      message: 'Save next = node(5). Reverse curr.next: node(4).next = node(3). Now 4 -> 3 -> 2 -> 1.',
      viz: {
        linkedList: {
          nodes: [
            { value: 4, id: 'n4' },
            { value: 3, id: 'n3' },
            { value: 2, id: 'n2' },
            { value: 1, id: 'n1' },
            { value: 5, id: 'n5' },
          ],
          pointers: { prev: 'n4', curr: 'n5' },
          highlighted: ['n4', 'n3', 'n2', 'n1'],
        },
        variables: { prev: 'node(4)', curr: 'node(5)', next: 'node(5)' },
      },
    },
    {
      line: 4,
      label: 'Reverse n5',
      message: 'Save next = null. Reverse curr.next: node(5).next = node(4). Now 5 -> 4 -> 3 -> 2 -> 1.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 5, id: 'n5' },
            { value: 4, id: 'n4' },
            { value: 3, id: 'n3' },
            { value: 2, id: 'n2' },
            { value: 1, id: 'n1' },
          ],
          pointers: { prev: 'n5', curr: '' },
          highlighted: ['n5', 'n4', 'n3', 'n2', 'n1'],
        },
        variables: { prev: 'node(5)', curr: 'null', next: 'null' },
      },
    },
    {
      line: 8,
      label: 'Done',
      message: 'curr is null so loop ends. Return prev = node(5). Reversed list: 5 -> 4 -> 3 -> 2 -> 1.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 5, id: 'n5' },
            { value: 4, id: 'n4' },
            { value: 3, id: 'n3' },
            { value: 2, id: 'n2' },
            { value: 1, id: 'n1' },
          ],
          pointers: { prev: 'n5' },
          highlighted: ['n5', 'n4', 'n3', 'n2', 'n1'],
        },
        variables: { result: '5 -> 4 -> 3 -> 2 -> 1' },
      },
    },
  ],
};

const mergeTwoSortedLists: Problem = {
  id: 'merge-two-sorted-lists',
  name: 'Merge Two Sorted Lists',
  number: 21,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/merge-two-sorted-lists/',
  description: 'You are given the heads of two sorted linked lists. Merge the two lists into one sorted list by splicing together the nodes of the two lists.',
  vizTypes: ['linked-list'],
  language: 'python',
  testInput: 'l1 = [1, 2, 4], l2 = [1, 3, 4]',
  timeComplexity: 'O(n + m)',
  spaceComplexity: 'O(1)',
  pattern: 'Dummy Head + Compare',
  hints: [
    'Use a dummy head node to simplify the merge logic.',
    'Compare heads of both lists and attach the smaller one.',
    'When one list is exhausted, attach the remainder of the other.',
  ],
  code: `def mergeTwoLists(l1, l2):
    dummy = ListNode(0)
    tail = dummy
    while l1 and l2:
        if l1.val <= l2.val:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    tail.next = l1 or l2
    return dummy.next`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'We have two sorted lists: l1 = [1, 2, 4] and l2 = [1, 3, 4]. Create a dummy node and tail pointer.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 4, id: 'n3' },
            { value: 1, id: 'n4' },
            { value: 3, id: 'n5' },
            { value: 4, id: 'n6' },
          ],
          pointers: { tail: 'dummy', l1: 'n1', l2: 'n4' },
        },
        variables: { dummy: 'node(0)' },
      },
    },
    {
      line: 4,
      label: 'Compare 1 vs 1',
      message: 'l1.val (1) <= l2.val (1), so attach l1 node to tail. Move l1 forward.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 4, id: 'n3' },
            { value: 1, id: 'n4' },
            { value: 3, id: 'n5' },
            { value: 4, id: 'n6' },
          ],
          pointers: { tail: 'n1', l1: 'n2', l2: 'n4' },
          highlighted: ['n1'],
        },
        variables: { merged: 'D -> 1' },
      },
    },
    {
      line: 4,
      label: 'Compare 2 vs 1',
      message: 'l1.val (2) > l2.val (1), so attach l2 node to tail. Move l2 forward.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 1, id: 'n4' },
            { value: 2, id: 'n2' },
            { value: 4, id: 'n3' },
            { value: 3, id: 'n5' },
            { value: 4, id: 'n6' },
          ],
          pointers: { tail: 'n4', l1: 'n2', l2: 'n5' },
          highlighted: ['n1', 'n4'],
        },
        variables: { merged: 'D -> 1 -> 1' },
      },
    },
    {
      line: 4,
      label: 'Compare 2 vs 3',
      message: 'l1.val (2) <= l2.val (3), so attach l1 node to tail. Move l1 forward.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 1, id: 'n4' },
            { value: 2, id: 'n2' },
            { value: 4, id: 'n3' },
            { value: 3, id: 'n5' },
            { value: 4, id: 'n6' },
          ],
          pointers: { tail: 'n2', l1: 'n3', l2: 'n5' },
          highlighted: ['n1', 'n4', 'n2'],
        },
        variables: { merged: 'D -> 1 -> 1 -> 2' },
      },
    },
    {
      line: 4,
      label: 'Compare 4 vs 3',
      message: 'l1.val (4) > l2.val (3), so attach l2 node to tail. Move l2 forward.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 1, id: 'n4' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n5' },
            { value: 4, id: 'n3' },
            { value: 4, id: 'n6' },
          ],
          pointers: { tail: 'n5', l1: 'n3', l2: 'n6' },
          highlighted: ['n1', 'n4', 'n2', 'n5'],
        },
        variables: { merged: 'D -> 1 -> 1 -> 2 -> 3' },
      },
    },
    {
      line: 4,
      label: 'Compare 4 vs 4',
      message: 'l1.val (4) <= l2.val (4), so attach l1 node to tail. Move l1 forward. l1 is now null.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 1, id: 'n4' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n5' },
            { value: 4, id: 'n3' },
            { value: 4, id: 'n6' },
          ],
          pointers: { tail: 'n3', l1: '', l2: 'n6' },
          highlighted: ['n1', 'n4', 'n2', 'n5', 'n3'],
        },
        variables: { merged: 'D -> 1 -> 1 -> 2 -> 3 -> 4' },
      },
    },
    {
      line: 11,
      label: 'Attach Rest',
      message: 'l1 is null, so attach remaining l2 (node 4) to tail.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 1, id: 'n4' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n5' },
            { value: 4, id: 'n3' },
            { value: 4, id: 'n6' },
          ],
          pointers: { tail: 'n6' },
          highlighted: ['n1', 'n4', 'n2', 'n5', 'n3', 'n6'],
        },
        variables: { merged: 'D -> 1 -> 1 -> 2 -> 3 -> 4 -> 4' },
      },
    },
    {
      line: 12,
      label: 'Done',
      message: 'Return dummy.next. Merged list: 1 -> 1 -> 2 -> 3 -> 4 -> 4.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 1, id: 'n1' },
            { value: 1, id: 'n4' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n5' },
            { value: 4, id: 'n3' },
            { value: 4, id: 'n6' },
          ],
          highlighted: ['n1', 'n4', 'n2', 'n5', 'n3', 'n6'],
        },
        variables: { result: '1 -> 1 -> 2 -> 3 -> 4 -> 4' },
      },
    },
  ],
};

const reorderList: Problem = {
  id: 'reorder-list',
  name: 'Reorder List',
  number: 143,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/reorder-list/',
  description: 'Given the head of a singly linked list, reorder it to: L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 -> ... Do not return anything, modify head in-place.',
  vizTypes: ['linked-list'],
  language: 'python',
  testInput: 'head = [1, 2, 3, 4]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Find Middle + Reverse + Merge',
  hints: [
    'Split the problem into three steps: find middle, reverse second half, merge.',
    'Use slow/fast pointers to find the middle of the list.',
    'After reversing the second half, interleave nodes from both halves.',
  ],
  code: `def reorderList(head):
    # Find middle
    slow, fast = head, head.next
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    # Reverse second half
    second = slow.next
    slow.next = None
    prev = None
    while second:
        tmp = second.next
        second.next = prev
        prev = second
        second = tmp
    # Merge two halves
    first, second = head, prev
    while second:
        tmp1, tmp2 = first.next, second.next
        first.next = second
        second.next = tmp1
        first, second = tmp1, tmp2`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Start with list 1 -> 2 -> 3 -> 4. Goal: reorder to 1 -> 4 -> 2 -> 3.',
      viz: {
        linkedList: {
          nodes: [
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
          ],
          pointers: { slow: 'n1', fast: 'n2' },
        },
      },
    },
    {
      line: 3,
      label: 'Find Middle',
      message: 'Move slow and fast pointers. slow advances 1 step, fast advances 2 steps. slow stops at node(2) -- the middle.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
          ],
          pointers: { slow: 'n2', fast: 'n4' },
          highlighted: ['n2'],
        },
        variables: { firstHalf: '1 -> 2', secondHalf: '3 -> 4' },
      },
    },
    {
      line: 7,
      label: 'Split',
      message: 'Set second = slow.next (node 3). Cut the list: slow.next = None. Now we have two lists: [1,2] and [3,4].',
      viz: {
        linkedList: {
          nodes: [
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
          ],
          pointers: { first: 'n1', second: 'n3' },
        },
        variables: { list1: '1 -> 2', list2: '3 -> 4' },
      },
    },
    {
      line: 9,
      label: 'Reverse 2nd',
      message: 'Reverse second half: 3 -> 4 becomes 4 -> 3. prev now points to node(4).',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 4, id: 'n4' },
            { value: 3, id: 'n3' },
          ],
          pointers: { first: 'n1', second: 'n4' },
          highlighted: ['n4', 'n3'],
        },
        variables: { list1: '1 -> 2', list2: '4 -> 3' },
      },
    },
    {
      line: 15,
      label: 'Merge Step 1a',
      message: 'Interleave: first=node(1), second=node(4). Set 1.next = 4.',
      viz: {
        linkedList: {
          nodes: [
            { value: 1, id: 'n1' },
            { value: 4, id: 'n4' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
          ],
          pointers: { first: 'n1', second: 'n4' },
          highlighted: ['n1', 'n4'],
        },
        variables: { building: '1 -> 4' },
      },
    },
    {
      line: 17,
      label: 'Merge Step 1b',
      message: 'Set 4.next = 2 (tmp1). Advance: first=node(2), second=node(3).',
      viz: {
        linkedList: {
          nodes: [
            { value: 1, id: 'n1' },
            { value: 4, id: 'n4' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
          ],
          pointers: { first: 'n2', second: 'n3' },
          highlighted: ['n1', 'n4', 'n2'],
        },
        variables: { building: '1 -> 4 -> 2' },
      },
    },
    {
      line: 17,
      label: 'Merge Step 2',
      message: 'Set 2.next = 3, 3.next = null. Advance: first=null, second=null. Loop ends.',
      viz: {
        linkedList: {
          nodes: [
            { value: 1, id: 'n1' },
            { value: 4, id: 'n4' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
          ],
          pointers: {},
          highlighted: ['n1', 'n4', 'n2', 'n3'],
        },
        variables: { building: '1 -> 4 -> 2 -> 3' },
      },
    },
    {
      line: 19,
      label: 'Done',
      message: 'Reorder complete! List is now 1 -> 4 -> 2 -> 3.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 1, id: 'n1' },
            { value: 4, id: 'n4' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
          ],
          highlighted: ['n1', 'n4', 'n2', 'n3'],
        },
        variables: { result: '1 -> 4 -> 2 -> 3' },
      },
    },
  ],
};

const removeNthNodeFromEnd: Problem = {
  id: 'remove-nth-node-from-end',
  name: 'Remove Nth Node From End of List',
  number: 19,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
  description: 'Given the head of a linked list, remove the nth node from the end of the list and return its head.',
  vizTypes: ['linked-list'],
  language: 'python',
  testInput: 'head = [1, 2, 3, 4, 5], n = 2',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Two Pointers with N-Gap',
  hints: [
    'Use a dummy node before head to handle edge cases.',
    'Advance the fast pointer n+1 steps ahead of slow.',
    'When fast reaches null, slow is right before the node to remove.',
  ],
  code: `def removeNthFromEnd(head, n):
    dummy = ListNode(0, head)
    slow = dummy
    fast = dummy
    for i in range(n + 1):
        fast = fast.next
    while fast:
        slow = slow.next
        fast = fast.next
    slow.next = slow.next.next
    return dummy.next`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'List: 1 -> 2 -> 3 -> 4 -> 5, n = 2. Add dummy node before head. Both slow and fast start at dummy.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
            { value: 5, id: 'n5' },
          ],
          pointers: { slow: 'dummy', fast: 'dummy' },
        },
        variables: { n: 2 },
      },
    },
    {
      line: 4,
      label: 'Advance Fast',
      message: 'Move fast forward n+1 = 3 steps: dummy -> 1 -> 2 -> 3. Now fast is at node(3), creating a gap of 3 between slow and fast.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
            { value: 5, id: 'n5' },
          ],
          pointers: { slow: 'dummy', fast: 'n3' },
        },
        variables: { n: 2, gap: 3 },
      },
    },
    {
      line: 6,
      label: 'Move Both (1)',
      message: 'Move both pointers one step. slow = node(1), fast = node(4).',
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
            { value: 5, id: 'n5' },
          ],
          pointers: { slow: 'n1', fast: 'n4' },
        },
        variables: { n: 2 },
      },
    },
    {
      line: 6,
      label: 'Move Both (2)',
      message: 'Move both pointers one step. slow = node(2), fast = node(5).',
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
            { value: 5, id: 'n5' },
          ],
          pointers: { slow: 'n2', fast: 'n5' },
        },
        variables: { n: 2 },
      },
    },
    {
      line: 6,
      label: 'Move Both (3)',
      message: 'Move both pointers one step. slow = node(3), fast = null. Loop ends.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
            { value: 5, id: 'n5' },
          ],
          pointers: { slow: 'n3', fast: '' },
          highlighted: ['n3'],
        },
        variables: { n: 2, 'slow.next': 'node(4) -- target to remove' },
      },
    },
    {
      line: 9,
      label: 'Remove Node',
      message: 'slow.next = slow.next.next: skip node(4). Node 4 is removed. List becomes 1 -> 2 -> 3 -> 5.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
            { value: 5, id: 'n5' },
          ],
          pointers: { slow: 'n3' },
          removingNode: 'n4',
          highlighted: ['n3', 'n5'],
        },
        variables: { removed: 4 },
      },
    },
    {
      line: 10,
      label: 'Done',
      message: 'Return dummy.next. Result: 1 -> 2 -> 3 -> 5.',
      viz: {
        linkedList: {
          nodes: [
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
            { value: 5, id: 'n5' },
          ],
          highlighted: ['n1', 'n2', 'n3', 'n5'],
        },
        variables: { result: '1 -> 2 -> 3 -> 5' },
      },
    },
  ],
};

const addTwoNumbers: Problem = {
  id: 'add-two-numbers',
  name: 'Add Two Numbers',
  number: 2,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/add-two-numbers/',
  description: 'You are given two non-empty linked lists representing two non-negative integers stored in reverse order. Add the two numbers and return the sum as a linked list.',
  vizTypes: ['linked-list'],
  language: 'python',
  testInput: 'l1 = [2, 4, 3], l2 = [5, 6, 4]',
  timeComplexity: 'O(max(n, m))',
  spaceComplexity: 'O(max(n, m))',
  pattern: 'Digit-by-Digit with Carry',
  hints: [
    'Process both lists digit by digit, just like manual addition.',
    'Keep track of the carry from each addition.',
    'Don\'t forget to handle the case where there\'s a remaining carry at the end.',
  ],
  code: `def addTwoNumbers(l1, l2):
    dummy = ListNode(0)
    curr = dummy
    carry = 0
    while l1 or l2 or carry:
        val = carry
        if l1:
            val += l1.val
            l1 = l1.next
        if l2:
            val += l2.val
            l2 = l2.next
        carry = val // 10
        curr.next = ListNode(val % 10)
        curr = curr.next
    return dummy.next`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'l1 = [2,4,3] represents 342. l2 = [5,6,4] represents 465. We add digit by digit with carry.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 2, id: 'a1' },
            { value: 4, id: 'a2' },
            { value: 3, id: 'a3' },
            { value: 5, id: 'b1' },
            { value: 6, id: 'b2' },
            { value: 4, id: 'b3' },
          ],
          pointers: { curr: 'dummy', l1: 'a1', l2: 'b1' },
        },
        variables: { carry: 0, '342 + 465': 807 },
      },
    },
    {
      line: 4,
      label: 'Add Ones',
      message: 'val = carry(0) + l1.val(2) + l2.val(5) = 7. carry = 7 // 10 = 0. Create node(7).',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 7, id: 'r1' },
          ],
          pointers: { curr: 'r1', l1: 'a2', l2: 'b2' },
          newNode: 'r1',
        },
        variables: { carry: 0, val: 7, digit: 7 },
      },
    },
    {
      line: 4,
      label: 'Add Tens',
      message: 'val = carry(0) + l1.val(4) + l2.val(6) = 10. carry = 10 // 10 = 1. Create node(0).',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 7, id: 'r1' },
            { value: 0, id: 'r2' },
          ],
          pointers: { curr: 'r2', l1: 'a3', l2: 'b3' },
          newNode: 'r2',
        },
        variables: { carry: 1, val: 10, digit: 0 },
      },
    },
    {
      line: 4,
      label: 'Add Hundreds',
      message: 'val = carry(1) + l1.val(3) + l2.val(4) = 8. carry = 8 // 10 = 0. Create node(8).',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 7, id: 'r1' },
            { value: 0, id: 'r2' },
            { value: 8, id: 'r3' },
          ],
          pointers: { curr: 'r3' },
          newNode: 'r3',
        },
        variables: { carry: 0, val: 8, digit: 8 },
      },
    },
    {
      line: 4,
      label: 'Check Loop',
      message: 'l1 is null, l2 is null, carry is 0. Loop condition fails -- we are done.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 7, id: 'r1' },
            { value: 0, id: 'r2' },
            { value: 8, id: 'r3' },
          ],
          pointers: { curr: 'r3' },
        },
        variables: { carry: 0, l1: 'null', l2: 'null' },
      },
    },
    {
      line: 15,
      label: 'Done',
      message: 'Return dummy.next. Result: 7 -> 0 -> 8, which represents 807. Verified: 342 + 465 = 807.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 7, id: 'r1' },
            { value: 0, id: 'r2' },
            { value: 8, id: 'r3' },
          ],
          highlighted: ['r1', 'r2', 'r3'],
        },
        variables: { result: '7 -> 0 -> 8 (807)' },
      },
    },
  ],
};

const linkedListCycle: Problem = {
  id: 'linked-list-cycle',
  name: 'Linked List Cycle',
  number: 141,
  difficulty: 'Easy',
  link: 'https://leetcode.com/problems/linked-list-cycle/',
  description: 'Given head, the head of a linked list, determine if the linked list has a cycle in it. Return true if there is a cycle, false otherwise.',
  vizTypes: ['linked-list'],
  language: 'python',
  testInput: 'head = [3, 2, 0, -4], pos = 1',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'Floyd\'s Tortoise and Hare',
  hints: [
    'Use two pointers moving at different speeds.',
    'If there is a cycle, the fast pointer will eventually catch up to the slow pointer.',
    'If the fast pointer reaches null, there is no cycle.',
  ],
  code: `def hasCycle(head):
    slow = head
    fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'List: 3 -> 2 -> 0 -> -4 -> (back to 2). Cycle starts at position 1 (node 2). Both slow and fast start at head.',
      viz: {
        linkedList: {
          nodes: [
            { value: 3, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 0, id: 'n3' },
            { value: -4, id: 'n4' },
          ],
          pointers: { slow: 'n1', fast: 'n1' },
        },
        variables: { cycle: 'n4 -> n2 (pos 1)' },
      },
    },
    {
      line: 4,
      label: 'Step 1',
      message: 'slow moves 1 step to node(2). fast moves 2 steps to node(0). They are different -- no cycle detected yet.',
      viz: {
        linkedList: {
          nodes: [
            { value: 3, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 0, id: 'n3' },
            { value: -4, id: 'n4' },
          ],
          pointers: { slow: 'n2', fast: 'n3' },
        },
        variables: { 'slow == fast': false },
      },
    },
    {
      line: 4,
      label: 'Step 2',
      message: 'slow moves to node(0). fast moves 2 steps: node(-4) then follows cycle back to node(2). They are different.',
      viz: {
        linkedList: {
          nodes: [
            { value: 3, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 0, id: 'n3' },
            { value: -4, id: 'n4' },
          ],
          pointers: { slow: 'n3', fast: 'n2' },
        },
        variables: { 'slow == fast': false },
      },
    },
    {
      line: 4,
      label: 'Step 3',
      message: 'slow moves to node(-4). fast moves 2 steps: node(0) then node(-4). They are different.',
      viz: {
        linkedList: {
          nodes: [
            { value: 3, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 0, id: 'n3' },
            { value: -4, id: 'n4' },
          ],
          pointers: { slow: 'n4', fast: 'n4' },
          highlighted: ['n4'],
        },
        variables: { 'slow == fast': true },
      },
    },
    {
      line: 6,
      label: 'Cycle Found!',
      message: 'slow == fast at node(-4)! Both pointers met inside the cycle. This proves a cycle exists.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 3, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 0, id: 'n3' },
            { value: -4, id: 'n4' },
          ],
          pointers: { slow: 'n4', fast: 'n4' },
          highlighted: ['n2', 'n3', 'n4'],
        },
        variables: { 'slow == fast': true, meeting: 'node(-4)' },
      },
    },
    {
      line: 7,
      label: 'Return True',
      message: 'Return True. The cycle exists: -4 points back to node(2), forming the loop 2 -> 0 -> -4 -> 2.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 3, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 0, id: 'n3' },
            { value: -4, id: 'n4' },
          ],
          highlighted: ['n2', 'n3', 'n4'],
        },
        variables: { result: true, cycleNodes: '2 -> 0 -> -4 -> 2' },
      },
    },
    {
      line: 7,
      label: 'Why It Works',
      message: 'Floyd\'s algorithm: if there\'s a cycle, fast gains 1 node per step on slow. They must eventually meet. O(n) time, O(1) space.',
      viz: {
        linkedList: {
          nodes: [
            { value: 3, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 0, id: 'n3' },
            { value: -4, id: 'n4' },
          ],
          highlighted: ['n2', 'n3', 'n4'],
        },
        variables: { result: true, time: 'O(n)', space: 'O(1)' },
      },
    },
  ],
};


const copyListRandom: Problem = {
  id: 'copy-list-with-random-pointer',
  name: 'Copy List with Random Pointer',
  number: 138,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/copy-list-with-random-pointer/',
  description: 'A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null. Construct a deep copy of the list.',
  vizTypes: ['linked-list', 'hashmap'],
  language: 'python',
  testInput: 'head = [[7,null],[13,0],[11,4],[10,2],[1,0]]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(n)',
  pattern: 'Hash Map Clone',
  hints: [
    'Use a hash map to map each original node to its copy.',
    'First pass: create all copy nodes. Second pass: assign next and random pointers.',
    'A defaultdict or get with None handles the null case cleanly.',
  ],
  code: `def copyRandomList(head):
    old_to_new = {}
    cur = head
    while cur:
        old_to_new[cur] = Node(cur.val)
        cur = cur.next
    cur = head
    while cur:
        copy = old_to_new[cur]
        copy.next = old_to_new.get(cur.next)
        copy.random = old_to_new.get(cur.random)
        cur = cur.next
    return old_to_new.get(head)`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Deep copy a linked list where each node has a next and random pointer. Use a hash map to track old-to-new mappings.',
      viz: {
        linkedList: {
          nodes: [
            { value: 7, id: 'n7' },
            { value: 13, id: 'n13' },
            { value: 11, id: 'n11' },
          ],
          pointers: { cur: 'n7' },
        },
        hashmap: { entries: [] },
      },
    },
    {
      line: 4,
      label: 'Copy node 7',
      message: 'First pass: create a copy of node 7 and store the mapping old_to_new[7] = Node(7).',
      viz: {
        linkedList: {
          nodes: [
            { value: 7, id: 'n7' },
            { value: 13, id: 'n13' },
            { value: 11, id: 'n11' },
          ],
          pointers: { cur: 'n7' },
          highlighted: ['n7'],
        },
        hashmap: { entries: [['7', 'Node(7)']], justAdded: '7' },
      },
    },
    {
      line: 4,
      label: 'Copy node 13',
      message: 'Create copy of node 13. Map old_to_new[13] = Node(13).',
      viz: {
        linkedList: {
          nodes: [
            { value: 7, id: 'n7' },
            { value: 13, id: 'n13' },
            { value: 11, id: 'n11' },
          ],
          pointers: { cur: 'n13' },
          highlighted: ['n13'],
        },
        hashmap: { entries: [['7', 'Node(7)'], ['13', 'Node(13)']], justAdded: '13' },
      },
    },
    {
      line: 4,
      label: 'Copy node 11',
      message: 'Create copy of node 11. All nodes now have copies in the hash map.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 7, id: 'n7' },
            { value: 13, id: 'n13' },
            { value: 11, id: 'n11' },
          ],
          pointers: { cur: 'n11' },
          highlighted: ['n11'],
        },
        hashmap: { entries: [['7', 'Node(7)'], ['13', 'Node(13)'], ['11', 'Node(11)']], justAdded: '11' },
      },
    },
    {
      line: 9,
      label: 'Wire node 7',
      message: 'Second pass: set copy(7).next = copy(13), copy(7).random = null. Wiring pointers using the map.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 7, id: 'n7' },
            { value: 13, id: 'n13' },
            { value: 11, id: 'n11' },
          ],
          pointers: { cur: 'n7' },
          highlighted: ['n7'],
        },
        hashmap: { entries: [['7', 'Node(7)'], ['13', 'Node(13)'], ['11', 'Node(11)']], highlighted: '7' },
        variables: { 'copy.next': 'Node(13)', 'copy.random': 'null' },
      },
    },
    {
      line: 9,
      label: 'Wire node 13',
      message: 'Set copy(13).next = copy(11), copy(13).random = copy(7). Random pointer maps correctly via hash map lookup.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 7, id: 'n7' },
            { value: 13, id: 'n13' },
            { value: 11, id: 'n11' },
          ],
          pointers: { cur: 'n13' },
          highlighted: ['n13', 'n7'],
        },
        hashmap: { entries: [['7', 'Node(7)'], ['13', 'Node(13)'], ['11', 'Node(11)']], highlighted: '13' },
        variables: { 'copy.next': 'Node(11)', 'copy.random': 'Node(7)' },
      },
    },
    {
      line: 12,
      label: 'Done',
      message: 'All copy nodes are wired. Return old_to_new[head] which is the deep copy of the entire list.',
      viz: {
        linkedList: {
          nodes: [
            { value: 7, id: 'c7' },
            { value: 13, id: 'c13' },
            { value: 11, id: 'c11' },
          ],
          pointers: { head: 'c7' },
        },
        hashmap: { entries: [['7', 'Node(7)'], ['13', 'Node(13)'], ['11', 'Node(11)']] },
        variables: { result: 'deep copy complete' },
      },
    },
  ],
};

const findDuplicate: Problem = {
  id: 'find-the-duplicate-number',
  name: 'Find the Duplicate Number',
  number: 287,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/find-the-duplicate-number/',
  description: 'Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive, find the duplicate number. You must solve it without modifying the array and using only constant extra space.',
  vizTypes: ['array'],
  language: 'python',
  testInput: 'nums = [1, 3, 4, 2, 2]',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: "Floyd's Cycle Detection",
  hints: [
    'Treat the array as a linked list where nums[i] points to index nums[i].',
    "Use Floyd's tortoise and hare algorithm to detect the cycle.",
    'After finding the intersection, reset one pointer to start to find the cycle entrance.',
  ],
  code: `def findDuplicate(nums):
    slow = nums[0]
    fast = nums[0]
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break
    slow = nums[0]
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    return slow`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Find the duplicate in [1,3,4,2,2] using Floyd\'s cycle detection. Treat each value as a pointer to the next index.',
      viz: {
        array: {
          values: [1, 3, 4, 2, 2],
          labels: { 0: 'i0', 1: 'i1', 2: 'i2', 3: 'i3', 4: 'i4' },
        },
        variables: { slow: 0, fast: 0 },
      },
    },
    {
      line: 2,
      label: 'Start pointers',
      message: 'Initialize slow = nums[0] = 1, fast = nums[0] = 1. Both start at the value at index 0.',
      viz: {
        array: {
          values: [1, 3, 4, 2, 2],
          highlights: [1],
          labels: { 0: 'i0', 1: 'slow,fast', 2: 'i2', 3: 'i3', 4: 'i4' },
        },
        variables: { slow: 1, fast: 1 },
      },
    },
    {
      line: 5,
      label: 'Move step 1',
      message: 'slow = nums[1] = 3, fast = nums[nums[1]] = nums[3] = 2. Slow moves one step, fast moves two.',
      viz: {
        array: {
          values: [1, 3, 4, 2, 2],
          highlights: [3, 2],
          labels: { 0: 'i0', 1: 'i1', 2: 'fast', 3: 'slow', 4: 'i4' },
        },
        variables: { slow: 3, fast: 2 },
      },
    },
    {
      line: 5,
      label: 'Move step 2',
      message: 'slow = nums[3] = 2, fast = nums[nums[2]] = nums[4] = 2. They meet at value 2!',
      isKeyMoment: true,
      viz: {
        array: {
          values: [1, 3, 4, 2, 2],
          highlights: [2],
          found: [2],
          labels: { 0: 'i0', 1: 'i1', 2: 'slow,fast', 3: 'i3', 4: 'i4' },
        },
        variables: { slow: 2, fast: 2, 'slow == fast': true },
      },
    },
    {
      line: 8,
      label: 'Phase 2 init',
      message: 'Cycle detected. Reset slow to nums[0] = 1. Keep fast at 2. Now move both one step at a time to find the entrance.',
      isKeyMoment: true,
      viz: {
        array: {
          values: [1, 3, 4, 2, 2],
          highlights: [1, 2],
          labels: { 0: 'i0', 1: 'slow', 2: 'fast', 3: 'i3', 4: 'i4' },
        },
        variables: { slow: 1, fast: 2, phase: 2 },
      },
    },
    {
      line: 10,
      label: 'Phase 2 step 1',
      message: 'slow = nums[1] = 3, fast = nums[2] = 4. Not equal yet, keep moving.',
      viz: {
        array: {
          values: [1, 3, 4, 2, 2],
          highlights: [3, 4],
          labels: { 0: 'i0', 1: 'i1', 2: 'i2', 3: 'slow', 4: 'fast' },
        },
        variables: { slow: 3, fast: 4 },
      },
    },
    {
      line: 10,
      label: 'Phase 2 step 2',
      message: 'slow = nums[3] = 2, fast = nums[4] = 2. They meet at 2! This is the duplicate.',
      isKeyMoment: true,
      viz: {
        array: {
          values: [1, 3, 4, 2, 2],
          highlights: [2],
          found: [2],
          labels: { 0: 'i0', 1: 'i1', 2: 'slow,fast', 3: 'i3', 4: 'i4' },
        },
        variables: { slow: 2, fast: 2, 'slow == fast': true },
      },
    },
    {
      line: 12,
      label: 'Result',
      message: 'The duplicate number is 2. Found using O(1) space and O(n) time via cycle detection.',
      viz: {
        array: {
          values: [1, 3, 4, 2, 2],
          found: [3, 4],
          labels: { 0: 'i0', 1: 'i1', 2: 'i2', 3: 'dup', 4: 'dup' },
        },
        variables: { result: 2 },
      },
    },
  ],
};

const lruCache: Problem = {
  id: 'lru-cache',
  name: 'LRU Cache',
  number: 146,
  difficulty: 'Medium',
  link: 'https://leetcode.com/problems/lru-cache/',
  description: 'Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement get and put operations in O(1) time.',
  vizTypes: ['linked-list', 'hashmap'],
  language: 'python',
  testInput: 'capacity=2, put(1,1), put(2,2), get(1), put(3,3), get(2)',
  timeComplexity: 'O(1) per operation',
  spaceComplexity: 'O(capacity)',
  pattern: 'Doubly Linked List + Hash Map',
  hints: [
    'Use a doubly linked list to maintain access order (most recent at tail).',
    'Use a hash map for O(1) key lookup to the list node.',
    'On eviction, remove from the head of the list (least recently used).',
  ],
  code: `class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.cache = {}  # key -> node
        # Dummy head/tail for doubly linked list
        self.head, self.tail = Node(0,0), Node(0,0)
        self.head.next = self.tail
        self.tail.prev = self.head

    def get(self, key):
        if key in self.cache:
            self._remove(self.cache[key])
            self._insert(self.cache[key])
            return self.cache[key].val
        return -1

    def put(self, key, value):
        if key in self.cache:
            self._remove(self.cache[key])
        self.cache[key] = Node(key, value)
        self._insert(self.cache[key])
        if len(self.cache) > self.cap:
            lru = self.head.next
            self._remove(lru)
            del self.cache[lru.key]`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Create an LRU Cache with capacity=2. Doubly linked list tracks usage order; hash map gives O(1) access.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'HEAD', id: 'head' },
            { value: 'TAIL', id: 'tail' },
          ],
        },
        hashmap: { entries: [] },
        variables: { capacity: 2, size: 0 },
      },
    },
    {
      line: 19,
      label: 'put(1,1)',
      message: 'Insert key=1, value=1. Add node to list (most recent) and to hash map.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'HEAD', id: 'head' },
            { value: '1:1', id: 'k1' },
            { value: 'TAIL', id: 'tail' },
          ],
          newNode: 'k1',
        },
        hashmap: { entries: [['1', 'Node(1,1)']], justAdded: '1' },
        variables: { capacity: 2, size: 1 },
      },
    },
    {
      line: 19,
      label: 'put(2,2)',
      message: 'Insert key=2, value=2. Node added after node 1 (closer to tail = more recent).',
      viz: {
        linkedList: {
          nodes: [
            { value: 'HEAD', id: 'head' },
            { value: '1:1', id: 'k1' },
            { value: '2:2', id: 'k2' },
            { value: 'TAIL', id: 'tail' },
          ],
          newNode: 'k2',
        },
        hashmap: { entries: [['1', 'Node(1,1)'], ['2', 'Node(2,2)']], justAdded: '2' },
        variables: { capacity: 2, size: 2 },
      },
    },
    {
      line: 10,
      label: 'get(1)',
      message: 'Access key=1. Found in cache! Move node 1 to most recent position (before tail). Return value=1.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'HEAD', id: 'head' },
            { value: '2:2', id: 'k2' },
            { value: '1:1', id: 'k1' },
            { value: 'TAIL', id: 'tail' },
          ],
          highlighted: ['k1'],
        },
        hashmap: { entries: [['1', 'Node(1,1)'], ['2', 'Node(2,2)']], highlighted: '1' },
        variables: { result: 1, mostRecent: 'key 1' },
      },
    },
    {
      line: 19,
      label: 'put(3,3)',
      message: 'Insert key=3. Cache is full (size=2)! Must evict the LRU item. Head.next = node 2, so evict key=2.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'HEAD', id: 'head' },
            { value: '2:2', id: 'k2' },
            { value: '1:1', id: 'k1' },
            { value: 'TAIL', id: 'tail' },
          ],
          removingNode: 'k2',
        },
        hashmap: { entries: [['1', 'Node(1,1)'], ['2', 'Node(2,2)']], justRemoved: '2' },
        variables: { evicting: 'key 2 (LRU)', capacity: 2 },
      },
    },
    {
      line: 21,
      label: 'After eviction',
      message: 'Key 2 evicted. Node 3 inserted as most recent. Cache now holds keys 1 and 3.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'HEAD', id: 'head' },
            { value: '1:1', id: 'k1' },
            { value: '3:3', id: 'k3' },
            { value: 'TAIL', id: 'tail' },
          ],
          newNode: 'k3',
        },
        hashmap: { entries: [['1', 'Node(1,1)'], ['3', 'Node(3,3)']], justAdded: '3' },
        variables: { capacity: 2, size: 2 },
      },
    },
    {
      line: 10,
      label: 'get(2)',
      message: 'Access key=2. Not found in cache (it was evicted). Return -1.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'HEAD', id: 'head' },
            { value: '1:1', id: 'k1' },
            { value: '3:3', id: 'k3' },
            { value: 'TAIL', id: 'tail' },
          ],
        },
        hashmap: { entries: [['1', 'Node(1,1)'], ['3', 'Node(3,3)']] },
        variables: { key: 2, result: -1, reason: 'evicted' },
      },
    },
    {
      line: 14,
      label: 'Summary',
      message: 'LRU Cache maintains O(1) get/put by combining a doubly linked list (order) with a hash map (lookup).',
      viz: {
        linkedList: {
          nodes: [
            { value: 'HEAD', id: 'head' },
            { value: '1:1', id: 'k1' },
            { value: '3:3', id: 'k3' },
            { value: 'TAIL', id: 'tail' },
          ],
          pointers: { LRU: 'k1', MRU: 'k3' },
        },
        hashmap: { entries: [['1', 'Node(1,1)'], ['3', 'Node(3,3)']] },
        variables: { capacity: 2, size: 2 },
      },
    },
  ],
};

const mergeKSorted: Problem = {
  id: 'merge-k-sorted-lists',
  name: 'Merge k Sorted Lists',
  number: 23,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/merge-k-sorted-lists/',
  description: 'You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.',
  vizTypes: ['linked-list'],
  language: 'python',
  testInput: 'lists = [[1,4,5],[1,3,4],[2,6]]',
  timeComplexity: 'O(N log k)',
  spaceComplexity: 'O(n)',
  pattern: 'Merge with Min Selection',
  hints: [
    'Compare all k list heads to find the minimum each time.',
    'A heap/priority queue optimizes finding the min to O(log k).',
    'Alternatively, merge lists pairwise like merge sort.',
  ],
  code: `def mergeKLists(lists):
    dummy = ListNode(0)
    cur = dummy
    while any(l for l in lists):
        # Find list with smallest head
        min_idx = -1
        for i, l in enumerate(lists):
            if l and (min_idx == -1 or l.val < lists[min_idx].val):
                min_idx = i
        cur.next = lists[min_idx]
        cur = cur.next
        lists[min_idx] = lists[min_idx].next
    return dummy.next`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Merge 3 sorted lists: [1,4,5], [1,3,4], [2,6]. Compare heads to pick the minimum each round.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'L1: 1->4->5', id: 'list1' },
            { value: 'L2: 1->3->4', id: 'list2' },
            { value: 'L3: 2->6', id: 'list3' },
            { value: 'result: []', id: 'result' },
          ],
        },
        variables: { heads: [1, 1, 2] },
      },
    },
    {
      line: 8,
      label: 'Pick min (1)',
      message: 'Compare heads: [1, 1, 2]. Min = 1 from L1. Append 1 to result, advance L1 to 4.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'L1: 4->5', id: 'list1' },
            { value: 'L2: 1->3->4', id: 'list2' },
            { value: 'L3: 2->6', id: 'list3' },
            { value: 'result: 1', id: 'result' },
          ],
          highlighted: ['list1'],
        },
        variables: { heads: [4, 1, 2], picked: 1, from: 'L1' },
      },
    },
    {
      line: 8,
      label: 'Pick min (1)',
      message: 'Compare heads: [4, 1, 2]. Min = 1 from L2. Append 1 to result, advance L2 to 3.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'L1: 4->5', id: 'list1' },
            { value: 'L2: 3->4', id: 'list2' },
            { value: 'L3: 2->6', id: 'list3' },
            { value: 'result: 1->1', id: 'result' },
          ],
          highlighted: ['list2'],
        },
        variables: { heads: [4, 3, 2], picked: 1, from: 'L2' },
      },
    },
    {
      line: 8,
      label: 'Pick min (2)',
      message: 'Compare heads: [4, 3, 2]. Min = 2 from L3. Append 2 to result, advance L3 to 6.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'L1: 4->5', id: 'list1' },
            { value: 'L2: 3->4', id: 'list2' },
            { value: 'L3: 6', id: 'list3' },
            { value: 'result: 1->1->2', id: 'result' },
          ],
          highlighted: ['list3'],
        },
        variables: { heads: [4, 3, 6], picked: 2, from: 'L3' },
      },
    },
    {
      line: 8,
      label: 'Pick min (3)',
      message: 'Compare heads: [4, 3, 6]. Min = 3 from L2. Append 3 to result, advance L2 to 4.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'L1: 4->5', id: 'list1' },
            { value: 'L2: 4', id: 'list2' },
            { value: 'L3: 6', id: 'list3' },
            { value: 'result: 1->1->2->3', id: 'result' },
          ],
          highlighted: ['list2'],
        },
        variables: { heads: [4, 4, 6], picked: 3, from: 'L2' },
      },
    },
    {
      line: 8,
      label: 'Pick min (4)',
      message: 'Compare heads: [4, 4, 6]. Min = 4 from L1 (tie-break). Append 4, advance L1 to 5.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'L1: 5', id: 'list1' },
            { value: 'L2: 4', id: 'list2' },
            { value: 'L3: 6', id: 'list3' },
            { value: 'result: 1->1->2->3->4', id: 'result' },
          ],
          highlighted: ['list1'],
        },
        variables: { heads: [5, 4, 6], picked: 4, from: 'L1' },
      },
    },
    {
      line: 8,
      label: 'Continue merging',
      message: 'Continue picking minimums: 4(L2), 5(L1), 6(L3). Lists drain one by one.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'L1: empty', id: 'list1' },
            { value: 'L2: empty', id: 'list2' },
            { value: 'L3: empty', id: 'list3' },
            { value: 'result: 1->1->2->3->4->4->5->6', id: 'result' },
          ],
          highlighted: ['result'],
        },
        variables: { remaining: 0 },
      },
    },
    {
      line: 12,
      label: 'Done',
      message: 'All lists merged into one sorted list: 1->1->2->3->4->4->5->6. Each step picks the global minimum head.',
      viz: {
        linkedList: {
          nodes: [
            { value: 1, id: 'r1' },
            { value: 1, id: 'r2' },
            { value: 2, id: 'r3' },
            { value: 3, id: 'r4' },
            { value: 4, id: 'r5' },
            { value: 4, id: 'r6' },
            { value: 5, id: 'r7' },
            { value: 6, id: 'r8' },
          ],
          pointers: { head: 'r1' },
        },
        variables: { result: '1->1->2->3->4->4->5->6' },
      },
    },
  ],
};

const reverseKGroup: Problem = {
  id: 'reverse-nodes-in-k-group',
  name: 'Reverse Nodes in k-Group',
  number: 25,
  difficulty: 'Hard',
  link: 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
  description: 'Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list. k is a positive integer and is less than or equal to the length of the linked list.',
  vizTypes: ['linked-list'],
  language: 'python',
  testInput: 'head = [1,2,3,4,5], k = 2',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  pattern: 'In-place Linked List Reversal',
  hints: [
    'First check if there are at least k nodes remaining before reversing.',
    'Reverse k nodes using standard list reversal technique.',
    'Connect the reversed group back to the rest of the list.',
  ],
  code: `def reverseKGroup(head, k):
    dummy = ListNode(0, head)
    groupPrev = dummy
    while True:
        kth = getKth(groupPrev, k)
        if not kth:
            break
        groupNext = kth.next
        # Reverse group
        prev, cur = kth.next, groupPrev.next
        while cur != groupNext:
            tmp = cur.next
            cur.next = prev
            prev = cur
            cur = tmp
        tmp = groupPrev.next
        groupPrev.next = kth
        groupPrev = tmp
    return dummy.next`,
  steps: [
    {
      line: 1,
      label: 'Init',
      message: 'Reverse nodes in groups of k=2 in list [1,2,3,4,5]. Use a dummy node before head.',
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
            { value: 5, id: 'n5' },
          ],
          pointers: { groupPrev: 'dummy' },
        },
        variables: { k: 2 },
      },
    },
    {
      line: 5,
      label: 'Find kth (group 1)',
      message: 'From groupPrev, find the kth (2nd) node. kth = node 2. Group is [1, 2].',
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 1, id: 'n1' },
            { value: 2, id: 'n2' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
            { value: 5, id: 'n5' },
          ],
          pointers: { groupPrev: 'dummy', kth: 'n2' },
          highlighted: ['n1', 'n2'],
        },
        variables: { k: 2, group: '[1, 2]' },
      },
    },
    {
      line: 10,
      label: 'Reverse group 1',
      message: 'Reverse nodes 1 and 2: change pointers so 2->1. Node 1 now points to node 3 (groupNext).',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 2, id: 'n2' },
            { value: 1, id: 'n1' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
            { value: 5, id: 'n5' },
          ],
          pointers: { groupPrev: 'dummy' },
          highlighted: ['n2', 'n1'],
        },
        variables: { reversed: '[2, 1]', groupNext: 3 },
      },
    },
    {
      line: 16,
      label: 'Reconnect group 1',
      message: 'Connect dummy->2 and 1->3. Advance groupPrev to node 1 (end of reversed group).',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 2, id: 'n2' },
            { value: 1, id: 'n1' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
            { value: 5, id: 'n5' },
          ],
          pointers: { groupPrev: 'n1' },
        },
        variables: { list: 'D->2->1->3->4->5' },
      },
    },
    {
      line: 5,
      label: 'Find kth (group 2)',
      message: 'From groupPrev (node 1), find kth node. kth = node 4. Group is [3, 4].',
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 2, id: 'n2' },
            { value: 1, id: 'n1' },
            { value: 3, id: 'n3' },
            { value: 4, id: 'n4' },
            { value: 5, id: 'n5' },
          ],
          pointers: { groupPrev: 'n1', kth: 'n4' },
          highlighted: ['n3', 'n4'],
        },
        variables: { k: 2, group: '[3, 4]' },
      },
    },
    {
      line: 10,
      label: 'Reverse group 2',
      message: 'Reverse nodes 3 and 4: change pointers so 4->3. Node 3 now points to node 5.',
      isKeyMoment: true,
      viz: {
        linkedList: {
          nodes: [
            { value: 'D', id: 'dummy' },
            { value: 2, id: 'n2' },
            { value: 1, id: 'n1' },
            { value: 4, id: 'n4' },
            { value: 3, id: 'n3' },
            { value: 5, id: 'n5' },
          ],
          pointers: { groupPrev: 'n1' },
          highlighted: ['n4', 'n3'],
        },
        variables: { reversed: '[4, 3]', list: 'D->2->1->4->3->5' },
      },
    },
    {
      line: 5,
      label: 'No more groups',
      message: 'From groupPrev (node 3), only 1 node remains (node 5). k=2 nodes not available, so stop. Node 5 stays in place.',
      viz: {
        linkedList: {
          nodes: [
            { value: 2, id: 'n2' },
            { value: 1, id: 'n1' },
            { value: 4, id: 'n4' },
            { value: 3, id: 'n3' },
            { value: 5, id: 'n5' },
          ],
          pointers: { head: 'n2' },
        },
        variables: { result: '2->1->4->3->5', groupsReversed: 2 },
      },
    },
  ],
};


export const linkedListProblems: Problem[] = [reverseLinkedList, mergeTwoSortedLists, reorderList, removeNthNodeFromEnd, addTwoNumbers, linkedListCycle, copyListRandom, findDuplicate, lruCache, mergeKSorted, reverseKGroup];
