---
title: 'Leetcode problem - Median of Two Sorted Arrays'
excerpt: 'This post discusses my implementation of the Leetcode problem - Median of Two Sorted Arrays.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2023-08-31T14:58:47.833Z'
author:
  name: Rafael Capaci
  picture: '/assets/profile.jpg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
tags:
  - 'python'
  - 'leetcode'
---

### Problem

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.


### Discussion

Median: the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value (`inline (a+b)/2`). 

### Solution

This is the final solution:

```py
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        i = j = 0
        size = len(nums1) + len(nums2)
        current = -1
        prev = -1

        for _ in range(0, (size // 2) + 1):
            prev = current
            first = nums1[i] if i < len(nums1) else None
            second = nums2[j] if j < len(nums2) else None

            if first is None:
                current = second
                j += 1
            elif second is None:
                current = first
                i += 1
            elif first < second:
                current = first
                i += 1
            else:
                current = second
                j += 1

        return current if size % 2 == 1 else (current + prev) / 2
```


<script src="https://gist.github.com/BenjaminAbt/ee4f77b9c5f3068506dd0d43df57f8f8.js"></script>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.

Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor. Sed blandit libero volutpat sed cras. Sed odio morbi quis commodo odio aenean sed adipiscing. Velit euismod in pellentesque massa placerat. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nisi lacus sed viverra tellus in. Nibh cras pulvinar mattis nunc sed. Luctus accumsan tortor posuere ac ut consequat semper viverra. Fringilla ut morbi tincidunt augue interdum velit euismod.

## Lorem Ipsum

Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.
