// Auto-migrated from legacy-index.html data store.
// This service acts as the content microservice boundary for the UI.
// DATA
// ──────────────────────────────────────────────
const categories = [
  {
    id: 'ds', label: 'Data Structures', color: '#1a4a8c', topics: [
      { id: 'arrays', label: 'Arrays' },
      { id: 'strings', label: 'Strings' },
      { id: 'linked-list', label: 'Linked Lists' },
      { id: 'stacks-queues', label: 'Stacks & Queues' },
      { id: 'hash-maps', label: 'Hash Maps' },
      { id: 'trees', label: 'Trees (BST, AVL)' },
      { id: 'heaps', label: 'Heaps & Priority Queues' },
      { id: 'tries', label: 'Tries' },
      { id: 'graphs', label: 'Graphs' },
      { id: 'segment-tree', label: 'Segment Trees' },
      { id: 'union-find', label: 'Union-Find (DSU)' },
      { id: 'matrix', label: 'Matrix / 2D Arrays' },
    ]
  },
  {
    id: 'algo', label: 'Algorithms', color: '#1a6b3c', topics: [
      { id: 'binary-search', label: 'Binary Search' },
      { id: 'sorting', label: 'Sorting Algorithms' },
      { id: 'recursion', label: 'Recursion & Backtracking' },
      { id: 'bfs-dfs', label: 'BFS & DFS' },
      { id: 'dynamic-programming', label: 'Dynamic Programming' },
      { id: 'greedy', label: 'Greedy Algorithms' },
      { id: 'divide-conquer', label: 'Divide & Conquer' },
      { id: 'bit-manipulation', label: 'Bit Manipulation' },
      { id: 'two-pointers', label: 'Two Pointers' },
      { id: 'sliding-window', label: 'Sliding Window' },
      { id: 'prefix-sum', label: 'Prefix Sum / Difference' },
      { id: 'topological-sort', label: 'Topological Sort' },
    ]
  },
  {
    id: 'patterns', label: 'Patterns', color: '#d4440c', topics: [
      { id: 'fast-slow-pointers', label: 'Fast & Slow Pointers' },
      { id: 'merge-intervals', label: 'Merge Intervals' },
      { id: 'monotonic-stack', label: 'Monotonic Stack' },
      { id: 'trie-pattern', label: 'Trie Pattern' },
      { id: 'modified-binary-search', label: 'Modified Binary Search' },
      { id: 'top-k-elements', label: 'Top K Elements' },
    ]
  },
];

// ──────────────────────────────────────────────
// CONTENT DATABASE
// ──────────────────────────────────────────────
const content = {};

content['arrays'] = {
  title: 'Arrays',
  subtitle: 'The foundation of all data structures. A contiguous block of memory storing elements of the same type, accessed via indices in O(1) time.',
  category: 'Data Structures',
  tags: [{label:'Data Structure', type:'ds'},{label:'O(1) Access', type:'complexity'},{label:'Foundational', type:'algo'}],
  complexity: { access:'O(1)', search:'O(n)', insert:'O(n)', delete:'O(n)', space:'O(n)' },
  toc: ['What is an Array?','Memory Layout','Core Operations','Common Patterns','Two Pointers Pattern','Sliding Window','Prefix Sum','Code Examples','When to Use'],
  sections: `
<div class="section">
  <div class="section-label"><div class="section-num">1</div><h2>What is an Array?</h2></div>
  <p>An array is a <strong>contiguous block of memory</strong> where elements are stored at consecutive addresses. Because of this, accessing any element by index is a constant-time operation — the CPU simply computes: <code>address = base + index × size</code>.</p>
  <div class="callout info"><div class="callout-icon">💡</div><div class="callout-body"><p><strong>Key insight:</strong> Arrays trade flexibility for speed. You pay O(n) for insertion/deletion to preserve contiguity, but gain O(1) random access — the best possible.</p></div></div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">2</div><h2>Memory Layout</h2></div>
  <p>Consider an integer array <code>arr = [10, 20, 30, 40, 50]</code> starting at address 1000 (each int = 4 bytes):</p>
  <div class="diagram">
    <div>Address: &nbsp;<span class="node">1000</span><span class="arr">→</span><span class="node">1004</span><span class="arr">→</span><span class="node">1008</span><span class="arr">→</span><span class="node">1012</span><span class="arr">→</span><span class="node">1016</span></div>
    <div>Value: &nbsp;&nbsp;&nbsp;&nbsp;<span class="node accent">10</span>&nbsp;&nbsp;&nbsp;<span class="node">20</span>&nbsp;&nbsp;&nbsp;<span class="node">30</span>&nbsp;&nbsp;&nbsp;<span class="node">40</span>&nbsp;&nbsp;&nbsp;<span class="node">50</span></div>
    <div style="margin-top:8px; font-size:12px; color:var(--text3)">Index: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[0] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4]</div>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">3</div><h2>Core Operations & Complexity</h2></div>
  <table class="pattern-table">
    <tr><th>Operation</th><th>Average</th><th>Worst</th><th>Notes</th></tr>
    <tr><td>Access by index</td><td><code>O(1)</code></td><td><code>O(1)</code></td><td>Direct memory calc</td></tr>
    <tr><td>Search (unsorted)</td><td><code>O(n)</code></td><td><code>O(n)</code></td><td>Linear scan</td></tr>
    <tr><td>Search (sorted)</td><td><code>O(log n)</code></td><td><code>O(log n)</code></td><td>Binary search</td></tr>
    <tr><td>Insert at end</td><td><code>O(1)*</code></td><td><code>O(n)</code></td><td>*Amortized for dynamic array</td></tr>
    <tr><td>Insert at index</td><td><code>O(n)</code></td><td><code>O(n)</code></td><td>Shift elements right</td></tr>
    <tr><td>Delete at end</td><td><code>O(1)</code></td><td><code>O(1)</code></td><td>Just decrement size</td></tr>
    <tr><td>Delete at index</td><td><code>O(n)</code></td><td><code>O(n)</code></td><td>Shift elements left</td></tr>
  </table>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">4</div><h2>Pattern 1 — Two Pointers</h2></div>
  <p>Two pointers is used when you need to find a pair or subarray satisfying a condition. Start one pointer at the beginning and one at the end, moving them towards each other based on comparisons. <strong>Works in O(n) instead of O(n²).</strong></p>
  <div class="callout tip"><div class="callout-icon">✅</div><div class="callout-body"><p><strong>Use when:</strong> Finding pairs that sum to target, palindrome check, container with most water, three-sum problems.</p></div></div>
  <div class="code-block">
    <div class="code-header">
      <span class="code-lang">Python</span>
      <span class="code-title">two_sum_sorted.py</span>
      <button class="copy-btn" onclick="copyCode(this)">Copy</button>
    </div>
    <pre><span class="kw">def</span> <span class="fn">two_sum_sorted</span>(nums: <span class="tp">list</span>[<span class="tp">int</span>], target: <span class="tp">int</span>) -> <span class="tp">list</span>[<span class="tp">int</span>]:
    <span class="str">"""Find two indices summing to target in a sorted array. O(n) time."""</span>
    left, right = <span class="num">0</span>, <span class="kw">len</span>(nums) - <span class="num">1</span>

    <span class="kw">while</span> left < right:
        current_sum = nums[left] + nums[right]

        <span class="kw">if</span> current_sum == target:
            <span class="kw">return</span> [left, right]          <span class="cmt"># found it!</span>
        <span class="kw">elif</span> current_sum < target:
            left += <span class="num">1</span>                        <span class="cmt"># need bigger sum → move left up</span>
        <span class="kw">else</span>:
            right -= <span class="num">1</span>                       <span class="cmt"># need smaller sum → move right down</span>

    <span class="kw">return</span> []                              <span class="cmt"># no pair found</span>

<span class="cmt"># Example</span>
print(two_sum_sorted([<span class="num">1</span>,<span class="num">3</span>,<span class="num">6</span>,<span class="num">8</span>,<span class="num">11</span>], <span class="num">9</span>))  <span class="cmt"># → [1, 2]  (3 + 6)</span></pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">5</div><h2>Pattern 2 — Sliding Window</h2></div>
  <p>Avoid recomputing subarray sums from scratch. Maintain a window and <strong>slide</strong> it: add the new element on the right, remove the old one on the left. Turns O(n·k) into <strong>O(n)</strong>.</p>
  <div class="code-block">
    <div class="code-header">
      <span class="code-lang">Python</span>
      <span class="code-title">max_subarray_sum.py</span>
      <button class="copy-btn" onclick="copyCode(this)">Copy</button>
    </div>
    <pre><span class="kw">def</span> <span class="fn">max_sum_subarray</span>(nums: <span class="tp">list</span>[<span class="tp">int</span>], k: <span class="tp">int</span>) -> <span class="tp">int</span>:
    <span class="str">"""Maximum sum of any subarray of size k. O(n) time, O(1) space."""</span>
    window_sum = <span class="kw">sum</span>(nums[:<span class="num">k</span>])
    max_sum = window_sum

    <span class="kw">for</span> i <span class="kw">in</span> <span class="kw">range</span>(k, <span class="kw">len</span>(nums)):
        window_sum += nums[i] - nums[i - k]  <span class="cmt"># slide: add right, remove left</span>
        max_sum = <span class="kw">max</span>(max_sum, window_sum)

    <span class="kw">return</span> max_sum

<span class="cmt"># Example: k=3</span>
print(max_sum_subarray([<span class="num">2</span>,<span class="num">1</span>,<span class="num">5</span>,<span class="num">1</span>,<span class="num">3</span>,<span class="num">2</span>], <span class="num">3</span>))  <span class="cmt"># → 9  (5+1+3)</span></pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">6</div><h2>Pattern 3 — Prefix Sum</h2></div>
  <p>Pre-compute cumulative sums so any subarray sum query is answered in <strong>O(1)</strong>. The trick: <code>sum(i,j) = prefix[j+1] - prefix[i]</code>.</p>
  <div class="code-block">
    <div class="code-header">
      <span class="code-lang">Python</span>
      <span class="code-title">prefix_sum.py</span>
      <button class="copy-btn" onclick="copyCode(this)">Copy</button>
    </div>
    <pre><span class="kw">class</span> <span class="tp">RangeSum</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, nums: <span class="tp">list</span>[<span class="tp">int</span>]):
        self.prefix = [<span class="num">0</span>] * (<span class="kw">len</span>(nums) + <span class="num">1</span>)
        <span class="kw">for</span> i, v <span class="kw">in</span> <span class="kw">enumerate</span>(nums):
            self.prefix[i+<span class="num">1</span>] = self.prefix[i] + v

    <span class="kw">def</span> <span class="fn">query</span>(self, left: <span class="tp">int</span>, right: <span class="tp">int</span>) -> <span class="tp">int</span>:
        <span class="str">"""Sum of nums[left..right] inclusive. O(1)."""</span>
        <span class="kw">return</span> self.prefix[right + <span class="num">1</span>] - self.prefix[left]

rs = RangeSum([<span class="num">3</span>,<span class="num">1</span>,<span class="num">4</span>,<span class="num">1</span>,<span class="num">5</span>,<span class="num">9</span>])
print(rs.query(<span class="num">1</span>, <span class="num">4</span>))  <span class="cmt"># → 11  (1+4+1+5)</span></pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">7</div><h2>Kadane's Algorithm — Max Subarray</h2></div>
  <p>Find the subarray with the maximum sum in <strong>O(n)</strong>. The idea: extend the current subarray if it helps, otherwise start fresh.</p>
  <div class="code-block">
    <div class="code-header">
      <span class="code-lang">Python</span>
      <span class="code-title">kadane.py</span>
      <button class="copy-btn" onclick="copyCode(this)">Copy</button>
    </div>
    <pre><span class="kw">def</span> <span class="fn">max_subarray</span>(nums: <span class="tp">list</span>[<span class="tp">int</span>]) -> <span class="tp">int</span>:
    <span class="str">"""Kadane's algorithm. O(n) time, O(1) space."""</span>
    max_sum = current = nums[<span class="num">0</span>]

    <span class="kw">for</span> num <span class="kw">in</span> nums[<span class="num">1</span>:]:
        current = <span class="kw">max</span>(num, current + num)  <span class="cmt"># extend or restart</span>
        max_sum = <span class="kw">max</span>(max_sum, current)

    <span class="kw">return</span> max_sum

print(max_subarray([-<span class="num">2</span>,<span class="num">1</span>,-<span class="num">3</span>,<span class="num">4</span>,-<span class="num">1</span>,<span class="num">2</span>,<span class="num">1</span>,-<span class="num">5</span>,<span class="num">4</span>]))  <span class="cmt"># → 6  (4,-1,2,1)</span></pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">8</div><h2>When to Use Arrays</h2></div>
  <table class="pattern-table">
    <tr><th>Situation</th><th>Why Array?</th><th>Alternative?</th></tr>
    <tr><td>Need O(1) random access</td><td>Index-based address calc</td><td>No alternative</td></tr>
    <tr><td>Mostly reads, few writes</td><td>Cache-friendly layout</td><td>Linked list if many inserts</td></tr>
    <tr><td>Known size at compile time</td><td>Static arrays (stack alloc)</td><td>Dynamic array / vector</td></tr>
    <tr><td>Sliding window / two pointers</td><td>Index arithmetic is trivial</td><td>Deque for variable window</td></tr>
    <tr><td>Frequent mid-insertions</td><td>❌ Use linked list</td><td>LinkedList, Deque</td></tr>
  </table>
  <div class="callout warn"><div class="callout-icon">⚠️</div><div class="callout-body"><p>Avoid arrays when you need frequent insertion/deletion in the middle — every operation shifts O(n) elements. Use a linked list or a balanced BST instead.</p></div></div>
</div>
`
};

content['binary-search'] = {
  title: 'Binary Search',
  subtitle: 'Eliminate half the search space with every comparison. O(log n) search on sorted data — and far more than just finding a value.',
  category: 'Algorithms',
  tags: [{label:'Algorithm', type:'algo'},{label:'O(log n)', type:'complexity'},{label:'Divide & Conquer', type:'pattern'}],
  complexity: { access:'—', search:'O(log n)', insert:'—', delete:'—', space:'O(1)' },
  toc: ['Core Idea','The Template','Classic Implementation','Finding Boundaries','Rotated Array','Real-World Applications','Common Mistakes'],
  sections: `
<div class="section">
  <div class="section-label"><div class="section-num">1</div><h2>The Core Idea</h2></div>
  <p>Binary search works on <strong>any monotonic function</strong> — not just sorted arrays. The key insight is: <em>if I can answer "is the answer ≥ mid?" then I can binary search on it.</em></p>
  <div class="callout info"><div class="callout-icon">🧠</div><div class="callout-body"><p><strong>Mental model:</strong> Think of binary search as a decision tree. Each step answers a yes/no question and eliminates half the remaining possibilities. After k steps, you've narrowed down from n to n/2ᵏ candidates.</p></div></div>
  <div class="diagram">
    <div>Search <span class="node accent">7</span> in [1, 3, 5, 7, 9, 11, 13]</div>
    <div style="margin-top:12px"><span class="node">1</span><span class="node">3</span><span class="node">5</span><span class="node accent">7←mid</span><span class="node">9</span><span class="node">11</span><span class="node">13</span></div>
    <div style="font-size:12px;color:var(--text3);margin:6px 0">7 == 7 → Found! (only 1 comparison needed)</div>
    <div style="margin-top:8px"><span class="node">1</span><span class="node">3</span><span class="node accent">5←mid</span>&nbsp;&nbsp;&nbsp;❌ 5 &lt; 7 → search right half</div>
    <div style="margin-top:8px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="node accent">7←mid</span><span class="node">9</span><span class="node">11</span>&nbsp;&nbsp;&nbsp;✅ Found 7</div>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">2</div><h2>The Universal Template</h2></div>
  <p>Master this one template and adapt it to every problem. The key is knowing <strong>what to return</strong> and <strong>how to shrink the space</strong>.</p>
  <div class="code-block">
    <div class="code-header">
      <span class="code-lang">Python</span>
      <span class="code-title">binary_search_template.py</span>
      <button class="copy-btn" onclick="copyCode(this)">Copy</button>
    </div>
    <pre><span class="cmt"># ── Template 1: Find exact target ──</span>
<span class="kw">def</span> <span class="fn">binary_search</span>(nums, target):
    left, right = <span class="num">0</span>, <span class="kw">len</span>(nums) - <span class="num">1</span>
    <span class="kw">while</span> left <= right:           <span class="cmt"># ≤ because [left, right] inclusive</span>
        mid = left + (right - left) // <span class="num">2</span>   <span class="cmt"># avoids overflow vs (l+r)//2</span>
        <span class="kw">if</span> nums[mid] == target:
            <span class="kw">return</span> mid
        <span class="kw">elif</span> nums[mid] < target:
            left = mid + <span class="num">1</span>         <span class="cmt"># mid already checked, exclude it</span>
        <span class="kw">else</span>:
            right = mid - <span class="num">1</span>        <span class="cmt"># mid already checked, exclude it</span>
    <span class="kw">return</span> -<span class="num">1</span>

<span class="cmt"># ── Template 2: Find leftmost position (lower bound) ──</span>
<span class="kw">def</span> <span class="fn">lower_bound</span>(nums, target):
    left, right = <span class="num">0</span>, <span class="kw">len</span>(nums)    <span class="cmt"># right = len (open interval)</span>
    <span class="kw">while</span> left < right:            <span class="cmt"># &lt; because half-open [left, right)</span>
        mid = left + (right - left) // <span class="num">2</span>
        <span class="kw">if</span> nums[mid] < target:
            left = mid + <span class="num">1</span>
        <span class="kw">else</span>:
            right = mid             <span class="cmt"># include mid in next round</span>
    <span class="kw">return</span> left                    <span class="cmt"># first index where nums[i] >= target</span></pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">3</div><h2>Rotated Sorted Array</h2></div>
  <p>A classic twist: the array is sorted but rotated. One half is always sorted — use that to decide which half to search in.</p>
  <div class="code-block">
    <div class="code-header">
      <span class="code-lang">Python</span>
      <span class="code-title">rotated_search.py</span>
      <button class="copy-btn" onclick="copyCode(this)">Copy</button>
    </div>
    <pre><span class="kw">def</span> <span class="fn">search_rotated</span>(nums, target):
    left, right = <span class="num">0</span>, <span class="kw">len</span>(nums) - <span class="num">1</span>
    <span class="kw">while</span> left <= right:
        mid = left + (right - left) // <span class="num">2</span>
        <span class="kw">if</span> nums[mid] == target: <span class="kw">return</span> mid

        <span class="cmt"># Determine which half is sorted</span>
        <span class="kw">if</span> nums[left] <= nums[mid]:             <span class="cmt"># left half is sorted</span>
            <span class="kw">if</span> nums[left] <= target < nums[mid]:  <span class="cmt"># target in left half</span>
                right = mid - <span class="num">1</span>
            <span class="kw">else</span>:                                  <span class="cmt"># target in right half</span>
                left = mid + <span class="num">1</span>
        <span class="kw">else</span>:                                      <span class="cmt"># right half is sorted</span>
            <span class="kw">if</span> nums[mid] < target <= nums[right]: <span class="cmt"># target in right half</span>
                left = mid + <span class="num">1</span>
            <span class="kw">else</span>:
                right = mid - <span class="num">1</span>
    <span class="kw">return</span> -<span class="num">1</span>

print(search_rotated([<span class="num">4</span>,<span class="num">5</span>,<span class="num">6</span>,<span class="num">7</span>,<span class="num">0</span>,<span class="num">1</span>,<span class="num">2</span>], <span class="num">0</span>))  <span class="cmt"># → 4</span></pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">4</div><h2>Binary Search on Answer</h2></div>
  <p>The most powerful pattern: instead of searching for a value, <strong>binary search on the answer space</strong>. Ask: "Can I achieve this result?" If yes, try better. If no, try worse.</p>
  <div class="code-block">
    <div class="code-header">
      <span class="code-lang">Python</span>
      <span class="code-title">koko_bananas.py — LeetCode 875</span>
      <button class="copy-btn" onclick="copyCode(this)">Copy</button>
    </div>
    <pre><span class="kw">import</span> math

<span class="kw">def</span> <span class="fn">min_eating_speed</span>(piles, h):
    <span class="str">"""Find minimum eating speed k such that Koko eats all in h hours."""</span>
    <span class="kw">def</span> <span class="fn">can_finish</span>(speed):
        <span class="kw">return</span> <span class="kw">sum</span>(math.ceil(p / speed) <span class="kw">for</span> p <span class="kw">in</span> piles) <= h

    left, right = <span class="num">1</span>, <span class="kw">max</span>(piles)  <span class="cmt"># search space: [1, max_pile]</span>
    <span class="kw">while</span> left < right:
        mid = left + (right - left) // <span class="num">2</span>
        <span class="kw">if</span> can_finish(mid):
            right = mid           <span class="cmt"># mid works, try smaller</span>
        <span class="kw">else</span>:
            left = mid + <span class="num">1</span>        <span class="cmt"># mid too slow, need faster</span>
    <span class="kw">return</span> left

print(min_eating_speed([<span class="num">3</span>,<span class="num">6</span>,<span class="num">7</span>,<span class="num">11</span>], <span class="num">8</span>))  <span class="cmt"># → 4</span></pre>
  </div>
  <div class="callout tip"><div class="callout-icon">✅</div><div class="callout-body"><p><strong>Recognition signal:</strong> "Find minimum/maximum X such that condition Y is satisfied" → Binary search on answer. The condition must be monotonic (once it fails, it always fails for harder values).</p></div></div>
</div>
`
};

content['dynamic-programming'] = {
  title: 'Dynamic Programming',
  subtitle: 'Break problems into overlapping subproblems, solve each once, and reuse the results. The most feared — and most rewarding — algorithmic technique.',
  category: 'Algorithms',
  tags: [{label:'Algorithm', type:'algo'},{label:'Optimization', type:'pattern'},{label:'Memoization', type:'complexity'}],
  complexity: { access:'Varies', search:'Varies', insert:'—', delete:'—', space:'O(n) or O(n²)' },
  toc: ['Core Concepts','Top-Down (Memoization)','Bottom-Up (Tabulation)','1D DP Patterns','2D DP Patterns','Sequence DP','Knapsack Pattern','Space Optimization'],
  sections: `
<div class="section">
  <div class="section-label"><div class="section-num">1</div><h2>Core Concepts</h2></div>
  <p>DP applies when a problem has two properties: <strong>Optimal substructure</strong> (optimal solution built from optimal sub-solutions) and <strong>Overlapping subproblems</strong> (same sub-problems solved repeatedly).</p>
  <div class="highlight-row">
    <div class="hl-card"><div class="hl-title">Step 1</div><div class="hl-val">Define state</div></div>
    <div class="hl-card"><div class="hl-title">Step 2</div><div class="hl-val">Write recurrence</div></div>
    <div class="hl-card"><div class="hl-title">Step 3</div><div class="hl-val">Set base cases</div></div>
  </div>
  <div class="callout info"><div class="callout-icon">🧠</div><div class="callout-body"><p><strong>The DP mindset:</strong> Trust the sub-problem. Assume <code>dp[i-1]</code> is already optimally solved, then figure out how <code>dp[i]</code> extends from it. Don't trace through every call — trust the definition.</p></div></div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">2</div><h2>Top-Down (Memoization)</h2></div>
  <p>Write the recursive solution naturally, then cache results to avoid recomputation. More intuitive, same complexity.</p>
  <div class="code-block">
    <div class="code-header">
      <span class="code-lang">Python</span>
      <span class="code-title">fibonacci_memo.py</span>
      <button class="copy-btn" onclick="copyCode(this)">Copy</button>
    </div>
    <pre><span class="kw">from</span> functools <span class="kw">import</span> cache

<span class="cmt"># Naive: O(2^n). With memo: O(n) time, O(n) space.</span>
@cache
<span class="kw">def</span> <span class="fn">fib</span>(n: <span class="tp">int</span>) -> <span class="tp">int</span>:
    <span class="kw">if</span> n <= <span class="num">1</span>: <span class="kw">return</span> n
    <span class="kw">return</span> fib(n-<span class="num">1</span>) + fib(n-<span class="num">2</span>)

<span class="cmt"># Manual memo with dict:</span>
<span class="kw">def</span> <span class="fn">fib_manual</span>(n, memo={}):
    <span class="kw">if</span> n <span class="kw">in</span> memo: <span class="kw">return</span> memo[n]
    <span class="kw">if</span> n <= <span class="num">1</span>: <span class="kw">return</span> n
    memo[n] = fib_manual(n-<span class="num">1</span>, memo) + fib_manual(n-<span class="num">2</span>, memo)
    <span class="kw">return</span> memo[n]</pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">3</div><h2>Bottom-Up (Tabulation)</h2></div>
  <p>Fill a table iteratively starting from base cases. More efficient (no recursion overhead, cache-friendly), but requires knowing the order of computation.</p>
  <div class="code-block">
    <div class="code-header">
      <span class="code-lang">Python</span>
      <span class="code-title">coin_change.py — Classic DP</span>
      <button class="copy-btn" onclick="copyCode(this)">Copy</button>
    </div>
    <pre><span class="kw">def</span> <span class="fn">coin_change</span>(coins: <span class="tp">list</span>[<span class="tp">int</span>], amount: <span class="tp">int</span>) -> <span class="tp">int</span>:
    <span class="str">"""Minimum coins to make amount. O(amount × len(coins)) time."""</span>
    INF = float(<span class="str">'inf'</span>)
    dp = [INF] * (amount + <span class="num">1</span>)
    dp[<span class="num">0</span>] = <span class="num">0</span>                          <span class="cmt"># base: 0 coins to make 0</span>

    <span class="kw">for</span> a <span class="kw">in</span> <span class="kw">range</span>(<span class="num">1</span>, amount + <span class="num">1</span>):
        <span class="kw">for</span> coin <span class="kw">in</span> coins:
            <span class="kw">if</span> coin <= a:
                dp[a] = <span class="kw">min</span>(dp[a], dp[a - coin] + <span class="num">1</span>)

    <span class="kw">return</span> dp[amount] <span class="kw">if</span> dp[amount] != INF <span class="kw">else</span> -<span class="num">1</span>

print(coin_change([<span class="num">1</span>,<span class="num">5</span>,<span class="num">6</span>,<span class="num">9</span>], <span class="num">11</span>))  <span class="cmt"># → 2  (5+6)</span></pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">4</div><h2>Knapsack Pattern</h2></div>
  <p>The most important DP pattern. Two variants: <strong>0/1 Knapsack</strong> (each item used once) and <strong>Unbounded Knapsack</strong> (items reusable).</p>
  <div class="code-block">
    <div class="code-header">
      <span class="code-lang">Python</span>
      <span class="code-title">knapsack_01.py</span>
      <button class="copy-btn" onclick="copyCode(this)">Copy</button>
    </div>
    <pre><span class="kw">def</span> <span class="fn">knapsack_01</span>(weights, values, capacity):
    <span class="str">"""0/1 Knapsack: each item used at most once."""</span>
    n = <span class="kw">len</span>(weights)
    <span class="cmt"># dp[i][w] = max value using first i items with capacity w</span>
    dp = [[<span class="num">0</span>] * (capacity + <span class="num">1</span>) <span class="kw">for</span> _ <span class="kw">in</span> <span class="kw">range</span>(n + <span class="num">1</span>)]

    <span class="kw">for</span> i <span class="kw">in</span> <span class="kw">range</span>(<span class="num">1</span>, n + <span class="num">1</span>):
        <span class="kw">for</span> w <span class="kw">in</span> <span class="kw">range</span>(capacity + <span class="num">1</span>):
            <span class="cmt"># Option 1: skip item i</span>
            dp[i][w] = dp[i-<span class="num">1</span>][w]
            <span class="cmt"># Option 2: take item i (if it fits)</span>
            <span class="kw">if</span> weights[i-<span class="num">1</span>] <= w:
                dp[i][w] = <span class="kw">max</span>(dp[i][w],
                    dp[i-<span class="num">1</span>][w - weights[i-<span class="num">1</span>]] + values[i-<span class="num">1</span>])

    <span class="kw">return</span> dp[n][capacity]

weights = [<span class="num">1</span>, <span class="num">3</span>, <span class="num">4</span>, <span class="num">5</span>]
values  = [<span class="num">1</span>, <span class="num">4</span>, <span class="num">5</span>, <span class="num">7</span>]
print(knapsack_01(weights, values, <span class="num">7</span>))  <span class="cmt"># → 9  (items 3+4, value 4+5)</span></pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">5</div><h2>Longest Common Subsequence (2D DP)</h2></div>
  <p>The canonical 2D DP problem. State: <code>dp[i][j]</code> = LCS of first i chars of s1 and first j chars of s2.</p>
  <div class="code-block">
    <div class="code-header">
      <span class="code-lang">Python</span>
      <span class="code-title">lcs.py</span>
      <button class="copy-btn" onclick="copyCode(this)">Copy</button>
    </div>
    <pre><span class="kw">def</span> <span class="fn">lcs</span>(s1: <span class="tp">str</span>, s2: <span class="tp">str</span>) -> <span class="tp">int</span>:
    m, n = <span class="kw">len</span>(s1), <span class="kw">len</span>(s2)
    dp = [[<span class="num">0</span>] * (n + <span class="num">1</span>) <span class="kw">for</span> _ <span class="kw">in</span> <span class="kw">range</span>(m + <span class="num">1</span>)]

    <span class="kw">for</span> i <span class="kw">in</span> <span class="kw">range</span>(<span class="num">1</span>, m + <span class="num">1</span>):
        <span class="kw">for</span> j <span class="kw">in</span> <span class="kw">range</span>(<span class="num">1</span>, n + <span class="num">1</span>):
            <span class="kw">if</span> s1[i-<span class="num">1</span>] == s2[j-<span class="num">1</span>]:       <span class="cmt"># chars match: extend</span>
                dp[i][j] = dp[i-<span class="num">1</span>][j-<span class="num">1</span>] + <span class="num">1</span>
            <span class="kw">else</span>:                           <span class="cmt"># no match: take best of skipping either</span>
                dp[i][j] = <span class="kw">max</span>(dp[i-<span class="num">1</span>][j], dp[i][j-<span class="num">1</span>])

    <span class="kw">return</span> dp[m][n]

print(lcs(<span class="str">"abcde"</span>, <span class="str">"ace"</span>))  <span class="cmt"># → 3  ("ace")</span></pre>
  </div>
  <table class="pattern-table">
    <tr><th>DP Pattern</th><th>Classic Problems</th><th>State Dims</th></tr>
    <tr><td>Linear DP</td><td>Fibonacci, Climbing Stairs, House Robber</td><td>1D</td></tr>
    <tr><td>Knapsack</td><td>Subset Sum, Coin Change, Partition Equal Subset</td><td>1D or 2D</td></tr>
    <tr><td>Sequence DP</td><td>LCS, Edit Distance, Wildcard Matching</td><td>2D</td></tr>
    <tr><td>Interval DP</td><td>Matrix Chain, Burst Balloons, Palindrome Partition</td><td>2D</td></tr>
    <tr><td>Tree DP</td><td>House Robber III, Diameter, Path Sum</td><td>varies</td></tr>
    <tr><td>Bitmask DP</td><td>TSP, Assignment Problem</td><td>2D (state+mask)</td></tr>
  </table>
</div>
`
};

content['linked-list'] = {
  title: 'Linked Lists',
  subtitle: 'Nodes connected by pointers. O(1) insertion/deletion anywhere, O(n) access. The dynamic alternative to arrays — and a classic interview minefield.',
  category: 'Data Structures',
  tags: [{label:'Data Structure', type:'ds'},{label:'O(1) Insert', type:'complexity'},{label:'Pointer Logic', type:'pattern'}],
  complexity: { access:'O(n)', search:'O(n)', insert:'O(1)', delete:'O(1)', space:'O(n)' },
  toc: ['Structure','Types','Core Operations','Reverse a Linked List','Cycle Detection','Merge Two Lists','Find Middle','Common Pitfalls'],
  sections: `
<div class="section">
  <div class="section-label"><div class="section-num">1</div><h2>Structure & Node Definition</h2></div>
  <p>A linked list is a sequence of nodes where each node stores a value and a pointer to the next node. Unlike arrays, nodes are scattered in memory — no contiguous allocation.</p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">node.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre><span class="kw">class</span> <span class="tp">ListNode</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, val=<span class="num">0</span>, next=<span class="kw">None</span>):
        self.val = val
        self.next = next

<span class="cmt"># Build: 1 → 2 → 3 → None</span>
head = <span class="tp">ListNode</span>(<span class="num">1</span>, <span class="tp">ListNode</span>(<span class="num">2</span>, <span class="tp">ListNode</span>(<span class="num">3</span>)))</pre>
  </div>
  <div class="diagram">
    <span class="node accent">1</span><span class="arr">→</span><span class="node">2</span><span class="arr">→</span><span class="node">3</span><span class="arr">→</span><span class="node">None</span>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">2</div><h2>Reverse a Linked List</h2></div>
  <p>The most important linked list operation. Use three pointers: <code>prev</code>, <code>curr</code>, <code>next_node</code>. Redirect each <code>.next</code> backward as you traverse.</p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">reverse.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre><span class="kw">def</span> <span class="fn">reverse_list</span>(head):
    prev, curr = <span class="kw">None</span>, head
    <span class="kw">while</span> curr:
        next_node = curr.next    <span class="cmt"># save next before overwriting</span>
        curr.next = prev         <span class="cmt"># reverse the pointer</span>
        prev = curr              <span class="cmt"># advance prev</span>
        curr = next_node         <span class="cmt"># advance curr</span>
    <span class="kw">return</span> prev                  <span class="cmt"># prev is new head</span>

<span class="cmt"># Recursive version:</span>
<span class="kw">def</span> <span class="fn">reverse_list_rec</span>(head):
    <span class="kw">if not</span> head <span class="kw">or not</span> head.next: <span class="kw">return</span> head
    new_head = reverse_list_rec(head.next)
    head.next.next = head
    head.next = <span class="kw">None</span>
    <span class="kw">return</span> new_head</pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">3</div><h2>Cycle Detection — Floyd's Algorithm</h2></div>
  <p>Fast pointer moves 2 steps, slow moves 1. If there's a cycle, they <em>must</em> meet. This is the <strong>tortoise and hare</strong> algorithm — O(n) time, O(1) space.</p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">cycle_detection.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre><span class="kw">def</span> <span class="fn">has_cycle</span>(head):
    slow = fast = head
    <span class="kw">while</span> fast <span class="kw">and</span> fast.next:
        slow = slow.next
        fast = fast.next.next
        <span class="kw">if</span> slow <span class="kw">is</span> fast: <span class="kw">return</span> <span class="kw">True</span>
    <span class="kw">return</span> <span class="kw">False</span>

<span class="kw">def</span> <span class="fn">find_cycle_start</span>(head):
    <span class="str">"""Find the node where the cycle begins."""</span>
    slow = fast = head
    <span class="kw">while</span> fast <span class="kw">and</span> fast.next:
        slow, fast = slow.next, fast.next.next
        <span class="kw">if</span> slow <span class="kw">is</span> fast:            <span class="cmt"># cycle detected</span>
            slow2 = head
            <span class="kw">while</span> slow2 <span class="kw">is not</span> slow:  <span class="cmt"># move both at speed 1</span>
                slow, slow2 = slow.next, slow2.next
            <span class="kw">return</span> slow              <span class="cmt"># meeting point = cycle start</span>
    <span class="kw">return</span> <span class="kw">None</span></pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">4</div><h2>Find Middle Node</h2></div>
  <p>Use fast & slow pointers. When fast reaches the end, slow is at the middle. Essential for merge sort on linked lists.</p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">find_middle.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre><span class="kw">def</span> <span class="fn">find_middle</span>(head):
    slow = fast = head
    <span class="kw">while</span> fast <span class="kw">and</span> fast.next:
        slow = slow.next
        fast = fast.next.next
    <span class="kw">return</span> slow    <span class="cmt"># slow is at middle</span></pre>
  </div>
  <div class="callout warn"><div class="callout-icon">⚠️</div><div class="callout-body"><p><strong>Common pitfall:</strong> Always save <code>next_node</code> before modifying <code>.next</code>. Losing the reference to the rest of the list is the #1 linked list bug.</p></div></div>
</div>
`
};

content['trees'] = {
  title: 'Trees & BST',
  subtitle: 'Hierarchical data with O(log n) operations when balanced. The backbone of databases, file systems, and parsing. Master trees, master everything.',
  category: 'Data Structures',
  tags: [{label:'Data Structure', type:'ds'},{label:'O(log n)', type:'complexity'},{label:'Recursive', type:'pattern'}],
  complexity: { access:'O(log n)', search:'O(log n)', insert:'O(log n)', delete:'O(log n)', space:'O(n)' },
  toc: ['Tree Terminology','Binary Search Tree','Tree Traversals','DFS vs BFS','BST Operations','Balanced Trees','Common Patterns'],
  sections: `
<div class="section">
  <div class="section-label"><div class="section-num">1</div><h2>Tree Terminology</h2></div>
  <div class="diagram">
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="node accent">10</span>&nbsp;&nbsp;&nbsp;&nbsp;← root</div>
    <div>&nbsp;&nbsp;&nbsp;↙&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↘</div>
    <div>&nbsp;&nbsp;<span class="node">5</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="node">15</span>&nbsp;&nbsp;&nbsp;← internal nodes</div>
    <div>&nbsp;↙&nbsp;&nbsp;↘&nbsp;&nbsp;&nbsp;&nbsp;↙&nbsp;&nbsp;↘</div>
    <div><span class="node">3</span>&nbsp;&nbsp;<span class="node">7</span>&nbsp;&nbsp;&nbsp;<span class="node">12</span>&nbsp;&nbsp;<span class="node">20</span>&nbsp;&nbsp;← leaves</div>
  </div>
  <table class="pattern-table">
    <tr><th>Term</th><th>Definition</th></tr>
    <tr><td>Height</td><td>Longest path from root to a leaf</td></tr>
    <tr><td>Depth</td><td>Distance from root to a specific node</td></tr>
    <tr><td>Balanced</td><td>Height difference between subtrees ≤ 1 for all nodes</td></tr>
    <tr><td>Complete</td><td>All levels filled except possibly last (left-to-right)</td></tr>
    <tr><td>Perfect</td><td>All internal nodes have 2 children, all leaves at same level</td></tr>
  </table>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">2</div><h2>BST Property & Node</h2></div>
  <p>For every node N: <strong>all nodes in left subtree &lt; N.val &lt; all nodes in right subtree</strong>. This invariant enables O(log n) search on balanced trees.</p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">tree_node.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre><span class="kw">class</span> <span class="tp">TreeNode</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, val=<span class="num">0</span>, left=<span class="kw">None</span>, right=<span class="kw">None</span>):
        self.val = val
        self.left = left
        self.right = right

<span class="kw">def</span> <span class="fn">insert_bst</span>(root, val):
    <span class="kw">if not</span> root: <span class="kw">return</span> <span class="tp">TreeNode</span>(val)
    <span class="kw">if</span> val < root.val:
        root.left = insert_bst(root.left, val)
    <span class="kw">else</span>:
        root.right = insert_bst(root.right, val)
    <span class="kw">return</span> root</pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">3</div><h2>Tree Traversals</h2></div>
  <p>Four fundamental ways to visit every node. Knowing which traversal to use is half the problem.</p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">traversals.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre><span class="cmt"># Inorder: Left → Root → Right  (gives SORTED output for BST!)</span>
<span class="kw">def</span> <span class="fn">inorder</span>(root):
    <span class="kw">if not</span> root: <span class="kw">return</span> []
    <span class="kw">return</span> inorder(root.left) + [root.val] + inorder(root.right)

<span class="cmt"># Preorder: Root → Left → Right  (used to COPY a tree)</span>
<span class="kw">def</span> <span class="fn">preorder</span>(root):
    <span class="kw">if not</span> root: <span class="kw">return</span> []
    <span class="kw">return</span> [root.val] + preorder(root.left) + preorder(root.right)

<span class="cmt"># Postorder: Left → Right → Root  (used to DELETE a tree)</span>
<span class="kw">def</span> <span class="fn">postorder</span>(root):
    <span class="kw">if not</span> root: <span class="kw">return</span> []
    <span class="kw">return</span> postorder(root.left) + postorder(root.right) + [root.val]

<span class="cmt"># Level Order (BFS): Level by level using a queue</span>
<span class="kw">from</span> collections <span class="kw">import</span> deque
<span class="kw">def</span> <span class="fn">level_order</span>(root):
    <span class="kw">if not</span> root: <span class="kw">return</span> []
    result, queue = [], deque([root])
    <span class="kw">while</span> queue:
        level = []
        <span class="kw">for</span> _ <span class="kw">in</span> <span class="kw">range</span>(<span class="kw">len</span>(queue)):
            node = queue.popleft()
            level.append(node.val)
            <span class="kw">if</span> node.left: queue.append(node.left)
            <span class="kw">if</span> node.right: queue.append(node.right)
        result.append(level)
    <span class="kw">return</span> result</pre>
  </div>
  <table class="pattern-table">
    <tr><th>Traversal</th><th>Use Case</th><th>Output on BST [5,3,7,2,4]</th></tr>
    <tr><td>Inorder</td><td>Sorted output, validate BST</td><td><code>[2, 3, 4, 5, 7]</code></td></tr>
    <tr><td>Preorder</td><td>Serialize/copy tree, prefix expressions</td><td><code>[5, 3, 2, 4, 7]</code></td></tr>
    <tr><td>Postorder</td><td>Delete tree, postfix expressions</td><td><code>[2, 4, 3, 7, 5]</code></td></tr>
    <tr><td>Level Order</td><td>Shortest path, level-wise problems</td><td><code>[[5],[3,7],[2,4]]</code></td></tr>
  </table>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">4</div><h2>Height & Diameter</h2></div>
  <p>Classic tree DP: compute answer at each node using results from children. The diameter is the longest path between any two nodes (may not pass through root).</p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">diameter.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre><span class="kw">def</span> <span class="fn">diameter</span>(root) -> <span class="tp">int</span>:
    max_d = [<span class="num">0</span>]

    <span class="kw">def</span> <span class="fn">height</span>(node):
        <span class="kw">if not</span> node: <span class="kw">return</span> <span class="num">0</span>
        left_h = height(node.left)
        right_h = height(node.right)
        max_d[<span class="num">0</span>] = <span class="kw">max</span>(max_d[<span class="num">0</span>], left_h + right_h)  <span class="cmt"># update diameter</span>
        <span class="kw">return</span> <span class="kw">max</span>(left_h, right_h) + <span class="num">1</span>              <span class="cmt"># return height</span>

    height(root)
    <span class="kw">return</span> max_d[<span class="num">0</span>]</pre>
  </div>
</div>
`
};

content['graphs'] = {
  title: 'Graphs',
  subtitle: 'The most general data structure: nodes and edges. From social networks to GPS routing, graphs model almost every real-world problem.',
  category: 'Data Structures',
  tags: [{label:'Data Structure', type:'ds'},{label:'BFS/DFS', type:'algo'},{label:'Shortest Path', type:'pattern'}],
  complexity: { access:'O(V+E)', search:'O(V+E)', insert:'O(1)', delete:'O(E)', space:'O(V+E)' },
  toc: ['Representation','BFS','DFS','Topological Sort','Dijkstra','Union-Find','Common Patterns'],
  sections: `
<div class="section">
  <div class="section-label"><div class="section-num">1</div><h2>Graph Representations</h2></div>
  <p>Two main ways to store a graph. Choose based on density: <strong>adjacency list</strong> for sparse graphs (most real-world graphs), <strong>adjacency matrix</strong> for dense graphs or when you need O(1) edge queries.</p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">representations.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre><span class="kw">from</span> collections <span class="kw">import</span> defaultdict

<span class="cmt"># Adjacency List (most common) — O(V+E) space</span>
graph = defaultdict(<span class="tp">list</span>)
edges = [(<span class="num">0</span>,<span class="num">1</span>), (<span class="num">0</span>,<span class="num">2</span>), (<span class="num">1</span>,<span class="num">3</span>), (<span class="num">2</span>,<span class="num">3</span>)]
<span class="kw">for</span> u, v <span class="kw">in</span> edges:
    graph[u].append(v)
    graph[v].append(u)   <span class="cmt"># remove for directed graph</span>

<span class="cmt"># Adjacency Matrix — O(V²) space, O(1) edge check</span>
n = <span class="num">4</span>
matrix = [[<span class="num">0</span>] * n <span class="kw">for</span> _ <span class="kw">in</span> <span class="kw">range</span>(n)]
<span class="kw">for</span> u, v <span class="kw">in</span> edges:
    matrix[u][v] = matrix[v][u] = <span class="num">1</span></pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">2</div><h2>BFS — Breadth-First Search</h2></div>
  <p>Explore level by level using a queue. BFS gives the <strong>shortest path in unweighted graphs</strong>. Always use BFS when asked for "minimum steps" or "shortest path".</p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">bfs.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre><span class="kw">from</span> collections <span class="kw">import</span> deque

<span class="kw">def</span> <span class="fn">bfs</span>(graph, start, target):
    queue = deque([(start, [start])])    <span class="cmt"># (node, path)</span>
    visited = {start}

    <span class="kw">while</span> queue:
        node, path = queue.popleft()
        <span class="kw">if</span> node == target: <span class="kw">return</span> path

        <span class="kw">for</span> neighbor <span class="kw">in</span> graph[node]:
            <span class="kw">if</span> neighbor <span class="kw">not in</span> visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    <span class="kw">return</span> []</pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">3</div><h2>DFS — Depth-First Search</h2></div>
  <p>Go as deep as possible before backtracking. Use DFS for: cycle detection, connected components, topological sort, path finding.</p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">dfs.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre><span class="kw">def</span> <span class="fn">dfs</span>(graph, node, visited=<span class="kw">None</span>):
    <span class="kw">if</span> visited <span class="kw">is None</span>: visited = set()
    visited.add(node)
    <span class="kw">for</span> neighbor <span class="kw">in</span> graph[node]:
        <span class="kw">if</span> neighbor <span class="kw">not in</span> visited:
            dfs(graph, neighbor, visited)
    <span class="kw">return</span> visited

<span class="cmt"># Iterative DFS with explicit stack:</span>
<span class="kw">def</span> <span class="fn">dfs_iterative</span>(graph, start):
    stack, visited = [start], set()
    <span class="kw">while</span> stack:
        node = stack.pop()
        <span class="kw">if</span> node <span class="kw">in</span> visited: <span class="kw">continue</span>
        visited.add(node)
        stack.extend(n <span class="kw">for</span> n <span class="kw">in</span> graph[node] <span class="kw">if</span> n <span class="kw">not in</span> visited)
    <span class="kw">return</span> visited</pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">4</div><h2>Dijkstra's Shortest Path</h2></div>
  <p>Weighted shortest path from a source to all nodes. Uses a <strong>min-heap</strong>. O((V+E) log V). <em>Does not work with negative weights — use Bellman-Ford for that.</em></p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">dijkstra.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre><span class="kw">import</span> heapq

<span class="kw">def</span> <span class="fn">dijkstra</span>(graph, src):
    <span class="str">"""graph: {node: [(neighbor, weight), ...]}</span>
<span class="str">    Returns shortest distances from src to all nodes."""</span>
    dist = {node: <span class="kw">float</span>(<span class="str">'inf'</span>) <span class="kw">for</span> node <span class="kw">in</span> graph}
    dist[src] = <span class="num">0</span>
    heap = [(<span class="num">0</span>, src)]   <span class="cmt"># (distance, node)</span>

    <span class="kw">while</span> heap:
        d, u = heapq.heappop(heap)
        <span class="kw">if</span> d > dist[u]: <span class="kw">continue</span>   <span class="cmt"># stale entry</span>

        <span class="kw">for</span> v, w <span class="kw">in</span> graph[u]:
            new_d = dist[u] + w
            <span class="kw">if</span> new_d < dist[v]:
                dist[v] = new_d
                heapq.heappush(heap, (new_d, v))

    <span class="kw">return</span> dist</pre>
  </div>
  <table class="pattern-table">
    <tr><th>Algorithm</th><th>Works With</th><th>Complexity</th><th>Use Case</th></tr>
    <tr><td>BFS</td><td>Unweighted</td><td><code>O(V+E)</code></td><td>Shortest hops</td></tr>
    <tr><td>Dijkstra</td><td>Non-negative weights</td><td><code>O((V+E)logV)</code></td><td>GPS, routing</td></tr>
    <tr><td>Bellman-Ford</td><td>Any weights (negative ok)</td><td><code>O(VE)</code></td><td>Negative edges</td></tr>
    <tr><td>Floyd-Warshall</td><td>All pairs</td><td><code>O(V³)</code></td><td>All-pairs shortest path</td></tr>
  </table>
</div>
`
};

content['sliding-window'] = {
  title: 'Sliding Window',
  subtitle: 'Maintain a window of elements and slide it across an array. Converts O(n²) brute force into elegant O(n) solutions.',
  category: 'Algorithms',
  tags: [{label:'Pattern', type:'pattern'},{label:'O(n)', type:'complexity'},{label:'Two Pointers', type:'algo'}],
  complexity: { access:'O(1)', search:'O(n)', insert:'O(1)', delete:'O(1)', space:'O(k)' },
  toc: ['Fixed Window','Variable Window','With HashMap','Longest Substring K Distinct','Minimum Window Substring','When to Use'],
  sections: `
<div class="section">
  <div class="section-label"><div class="section-num">1</div><h2>Fixed Size Window</h2></div>
  <p>When window size k is given, start with a window of size k, then slide by adding right element and removing leftmost. Classic example: max sum subarray of size k.</p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">fixed_window.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre><span class="kw">def</span> <span class="fn">max_sum_k</span>(nums, k):
    window = <span class="kw">sum</span>(nums[:k])
    best = window
    <span class="kw">for</span> i <span class="kw">in</span> <span class="kw">range</span>(k, <span class="kw">len</span>(nums)):
        window += nums[i] - nums[i-k]
        best = <span class="kw">max</span>(best, window)
    <span class="kw">return</span> best</pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">2</div><h2>Variable Size Window</h2></div>
  <p>Expand right pointer always, shrink left pointer when constraint is violated. The window size varies to find the optimal answer.</p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">longest_no_repeat.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre><span class="kw">def</span> <span class="fn">length_of_longest_substring</span>(s: <span class="tp">str</span>) -> <span class="tp">int</span>:
    <span class="str">"""Longest substring without repeating characters. O(n)."""</span>
    char_idx = {}       <span class="cmt"># char → last seen index</span>
    left = best = <span class="num">0</span>

    <span class="kw">for</span> right, ch <span class="kw">in</span> <span class="kw">enumerate</span>(s):
        <span class="kw">if</span> ch <span class="kw">in</span> char_idx <span class="kw">and</span> char_idx[ch] >= left:
            left = char_idx[ch] + <span class="num">1</span>   <span class="cmt"># shrink: jump past duplicate</span>
        char_idx[ch] = right
        best = <span class="kw">max</span>(best, right - left + <span class="num">1</span>)

    <span class="kw">return</span> best

print(length_of_longest_substring(<span class="str">"abcabcbb"</span>))  <span class="cmt"># → 3 ("abc")</span></pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">3</div><h2>Minimum Window Substring</h2></div>
  <p>Find the smallest substring of s containing all characters of t. Classic hard sliding window problem. O(n + m) time.</p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">min_window.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre><span class="kw">from</span> collections <span class="kw">import</span> Counter

<span class="kw">def</span> <span class="fn">min_window</span>(s: <span class="tp">str</span>, t: <span class="tp">str</span>) -> <span class="tp">str</span>:
    need = Counter(t)
    missing = <span class="kw">len</span>(t)       <span class="cmt"># how many chars still needed</span>
    best = (<span class="kw">float</span>(<span class="str">'inf'</span>), <span class="num">0</span>, <span class="num">0</span>)
    left = <span class="num">0</span>

    <span class="kw">for</span> right, ch <span class="kw">in</span> <span class="kw">enumerate</span>(s, <span class="num">1</span>):
        <span class="kw">if</span> need[ch] > <span class="num">0</span>: missing -= <span class="num">1</span>
        need[ch] -= <span class="num">1</span>

        <span class="kw">if</span> missing == <span class="num">0</span>:                    <span class="cmt"># window is valid</span>
            <span class="kw">while</span> need[s[left]] < <span class="num">0</span>:        <span class="cmt"># shrink from left</span>
                need[s[left]] += <span class="num">1</span>
                left += <span class="num">1</span>
            <span class="kw">if</span> right - left < best[<span class="num">0</span>]:
                best = (right - left, left, right)
            need[s[left]] += <span class="num">1</span>             <span class="cmt"># prep to expand again</span>
            missing += <span class="num">1</span>
            left += <span class="num">1</span>

    <span class="kw">return</span> s[best[<span class="num">1</span>]:best[<span class="num">2</span>]] <span class="kw">if</span> best[<span class="num">0</span>] != <span class="kw">float</span>(<span class="str">'inf'</span>) <span class="kw">else</span> <span class="str">""</span></pre>
  </div>
  <div class="callout tip"><div class="callout-icon">✅</div><div class="callout-body"><p><strong>Recognition pattern:</strong> "Find smallest/longest subarray/substring that satisfies X" → Almost always sliding window. If X involves character frequencies, add a HashMap.</p></div></div>
</div>
`
};

// Add more topics referencing the same structure but with placeholder content
const placeholderTopics = [
  'strings','stacks-queues','hash-maps','heaps','tries','segment-tree','union-find','matrix',
  'sorting','recursion','bfs-dfs','greedy','divide-conquer','bit-manipulation','two-pointers',
  'prefix-sum','topological-sort','fast-slow-pointers','merge-intervals','monotonic-stack',
  'trie-pattern','modified-binary-search','top-k-elements'
];

const placeholderContent = {
  'strings': { title: 'Strings', subtitle: 'Immutable sequences of characters. Hashing, pattern matching, and the most common interview topic after arrays.', category: 'Data Structures', tags:[{label:'Data Structure',type:'ds'},{label:'O(n)',type:'complexity'}], complexity:{access:'O(1)',search:'O(n)',insert:'O(n)',delete:'O(n)',space:'O(n)'}, toc:['Basics','String Hashing','KMP Algorithm','Rabin-Karp','Anagrams','Palindromes'] },
  'stacks-queues': { title: 'Stacks & Queues', subtitle: 'LIFO and FIFO structures. Foundation for DFS, BFS, expression evaluation, and monotonic problems.', category: 'Data Structures', tags:[{label:'Data Structure',type:'ds'},{label:'O(1)',type:'complexity'}], complexity:{access:'O(n)',search:'O(n)',insert:'O(1)',delete:'O(1)',space:'O(n)'}, toc:['Stack Basics','Queue Basics','Monotonic Stack','Min Stack','LRU Cache'] },
  'hash-maps': { title: 'Hash Maps', subtitle: 'O(1) average lookup using hash functions. The most useful data structure for interviews — use it everywhere.', category: 'Data Structures', tags:[{label:'Data Structure',type:'ds'},{label:'O(1) avg',type:'complexity'}], complexity:{access:'O(1)',search:'O(1)',insert:'O(1)',delete:'O(1)',space:'O(n)'}, toc:['Hash Functions','Collision Resolution','Two Sum','Group Anagrams','Frequency Counting'] },
  'heaps': { title: 'Heaps & Priority Queues', subtitle: 'A complete binary tree satisfying the heap property. The go-to structure for "find the kth largest/smallest" problems.', category: 'Data Structures', tags:[{label:'Data Structure',type:'ds'},{label:'O(log n)',type:'complexity'}], complexity:{access:'O(1)',search:'O(n)',insert:'O(log n)',delete:'O(log n)',space:'O(n)'}, toc:['Min/Max Heap','heapq in Python','Top K Elements','Merge K Sorted Lists','Median Finder'] },
  'tries': { title: 'Tries (Prefix Trees)', subtitle: 'A tree where each path from root to leaf spells a word. Enables O(L) prefix search — essential for autocomplete.', category: 'Data Structures', tags:[{label:'Data Structure',type:'ds'},{label:'O(L)',type:'complexity'}], complexity:{access:'O(L)',search:'O(L)',insert:'O(L)',delete:'O(L)',space:'O(N·L)'}, toc:['Trie Node','Insert & Search','Word Search II','Prefix Matching','Auto-Complete'] },
  'sorting': { title: 'Sorting Algorithms', subtitle: 'From O(n²) bubble sort to O(n log n) merge sort. Know them all — and know when each applies.', category: 'Algorithms', tags:[{label:'Algorithm',type:'algo'},{label:'O(n log n)',type:'complexity'}], complexity:{access:'—',search:'—',insert:'—',delete:'—',space:'O(1) to O(n)'}, toc:['Comparison Sorts','Merge Sort','Quick Sort','Heap Sort','Counting/Radix Sort','When to Use Which'] },
  'recursion': { title: 'Recursion & Backtracking', subtitle: 'Functions calling themselves. Backtracking systematically tries all possibilities, pruning dead ends early.', category: 'Algorithms', tags:[{label:'Algorithm',type:'algo'},{label:'Backtracking',type:'pattern'}], complexity:{access:'—',search:'O(n!)',insert:'—',delete:'—',space:'O(n)'}, toc:['Recursion Basics','Backtracking Template','Subsets','Permutations','N-Queens','Sudoku Solver'] },
  'greedy': { title: 'Greedy Algorithms', subtitle: 'Make the locally optimal choice at each step. When it works, greedy is beautifully simple. The challenge: proving it works.', category: 'Algorithms', tags:[{label:'Algorithm',type:'algo'},{label:'Optimization',type:'pattern'}], complexity:{access:'—',search:'O(n log n)',insert:'—',delete:'—',space:'O(1)'}, toc:['Greedy Choice','Interval Scheduling','Huffman Coding','Jump Game','Meeting Rooms'] },
  'two-pointers': { title: 'Two Pointers', subtitle: 'Two indices moving through a sequence, often from opposite ends. Converts O(n²) into O(n) for many problems.', category: 'Algorithms', tags:[{label:'Pattern',type:'pattern'},{label:'O(n)',type:'complexity'}], complexity:{access:'O(1)',search:'O(n)',insert:'—',delete:'—',space:'O(1)'}, toc:['Opposite Ends','Same Direction','Three Sum','Container With Most Water','Trapping Rain Water'] },
};

function getCategoryLabelByTopicId(topicId) {
  for (const category of categories) {
    for (const topic of category.topics) {
      if (topic.id === topicId) {
        return category.label;
      }
    }
  }
  return 'Algorithms';
}

const topicProfiles = {
  strings: {
    recognition: [
      'The problem asks about substrings, matching, or character frequency constraints.',
      'You need to compare many slices of text and must avoid repeated full scans.',
      'Unicode, case sensitivity, or normalization rules can change correctness.',
    ],
    systemUse:
      'Strings power logs, parsers, search bars, compilers, and protocol decoders. Strong string fundamentals prevent subtle production bugs.',
    approach:
      'Start by choosing representation (raw string, frequency map, rolling hash, suffix structure), then define what state changes at each character.',
    pitfalls: [
      ['Index drift', 'Window boundaries skip a character', 'Trace left/right pointers manually on paper'],
      ['Encoding mismatch', 'Fails on emoji or accents', 'Use code points consistently'],
      ['Overcopying', 'Time limit exceeded', 'Use pointers/slices instead of rebuilding strings'],
    ],
  },
  'stacks-queues': {
    recognition: [
      'You need undo/rollback (stack) or FIFO scheduling (queue).',
      'The order of processing is more important than random access.',
      'You can solve it in one linear pass with push/pop discipline.',
    ],
    systemUse:
      'Stacks and queues appear in browser history, task schedulers, DFS/BFS, and stream processing pipelines.',
    approach:
      'Identify the invariant: what must remain true for the top/front element after each operation.',
    pitfalls: [
      ['Pop without guard', 'Runtime errors on empty structure', 'Always check size before pop/dequeue'],
      ['Wrong structure choice', 'Correct logic but wrong complexity', 'Use queue for FIFO, stack for LIFO'],
      ['State leak', 'Old data affects new test case', 'Reset structure per test run'],
    ],
  },
  'hash-maps': {
    recognition: [
      'You need constant-time lookup by key.',
      'The problem asks for counts, first/last index, or seen-before checks.',
      'Repeated membership tests make nested loops too expensive.',
    ],
    systemUse:
      'Hash maps are default building blocks for caches, indexing, deduplication, and frequency analytics.',
    approach:
      'Define key design first. A wrong key means correct code with incorrect grouping or lookup behavior.',
    pitfalls: [
      ['Mutable keys', 'Entries become unreachable', 'Use immutable keys only'],
      ['Collision assumptions', 'Unexpected slowdowns', 'Remember O(1) is average, not guaranteed'],
      ['Forgot update order', 'Off-by-one index answers', 'Store/check in the right sequence'],
    ],
  },
  heaps: {
    recognition: [
      'Prompt contains top-k, kth largest, running median, or best-first selection.',
      'You need repeated min/max extraction while streaming values.',
      'Full sorting is too expensive for required output.',
    ],
    systemUse:
      'Heaps power schedulers, event loops, shortest-path algorithms, and online ranking systems.',
    approach:
      'Track exactly what the heap stores (value, index, metadata). Heap correctness depends on this tuple design.',
    pitfalls: [
      ['Wrong heap polarity', 'Outputs reverse order', 'Use min-heap or negate values for max behavior'],
      ['Stale entries', 'Popped value no longer valid', 'Lazy-delete with validity checks'],
      ['Overgrown heap', 'Memory increases unnecessarily', 'Trim to k when solving top-k problems'],
    ],
  },
  tries: {
    recognition: [
      'Prefix queries or autocomplete are central requirements.',
      'You need many string lookups with shared prefixes.',
      'Repeated scanning of dictionary words is too slow.',
    ],
    systemUse:
      'Tries back autocomplete, spell-check, lexicon search, and prefix-based security filtering.',
    approach:
      'Model node fields intentionally: children map, terminal marker, and optional payload like word frequency.',
    pitfalls: [
      ['Missing terminal flag', 'Prefix mistaken for full word', 'Store explicit end-of-word marker'],
      ['Sparse children inefficiency', 'High memory footprint', 'Choose map vs fixed array by alphabet size'],
      ['Delete complexity', 'Orphan nodes remain', 'Prune only when child count reaches zero'],
    ],
  },
  'segment-tree': {
    recognition: [
      'Many range queries mixed with updates.',
      'Brute-force range scans are too slow under high query count.',
      'You need associative operations like sum/min/max/gcd.',
    ],
    systemUse:
      'Segment trees support fast analytics dashboards, gaming leaderboards, and time-series aggregation.',
    approach:
      'Define merge operation and identity value first; tree logic stays the same across sum/min/max variants.',
    pitfalls: [
      ['Wrong interval convention', 'Boundary errors on queries', 'Stick to one style: closed or half-open'],
      ['Incorrect merge identity', 'Neutral values corrupt results', 'Use 0 for sum, +inf for min, -inf for max'],
      ['Lazy propagation bug', 'Updates seem partially applied', 'Push lazy tags before descending'],
    ],
  },
  'union-find': {
    recognition: [
      'You need fast connectivity checks under repeated unions.',
      'Problem asks if two nodes belong to same component.',
      'Graph edges arrive incrementally over time.',
    ],
    systemUse:
      'Union-Find appears in network connectivity, clustering, Kruskal MST, and account merging.',
    approach:
      'Use path compression + union by size/rank; together they make operations almost constant time in practice.',
    pitfalls: [
      ['No compression', 'Performance degrades on chains', 'Compress parent pointers during find'],
      ['Union wrong roots', 'Component sizes become incorrect', 'Always union root-to-root'],
      ['Index mismatch', 'Out-of-bounds errors', 'Normalize IDs before DSU operations'],
    ],
  },
  matrix: {
    recognition: [
      'Grid traversal with row/column neighbors.',
      'Problems mention islands, shortest path in grid, or DP over cells.',
      'State depends on directional movement or cell boundaries.',
    ],
    systemUse:
      'Matrix problems model image processing, maps, game boards, and dynamic programming tables.',
    approach:
      'Define direction vectors once and enforce boundary checks before reading neighbors.',
    pitfalls: [
      ['Forgot visited state', 'Infinite loops in DFS/BFS', 'Mark visited immediately when enqueuing'],
      ['Boundary oversight', 'Runtime index errors', 'Centralize inBounds helper'],
      ['Mixed row/col semantics', 'Transposed logic bugs', 'Use consistent naming: r,c everywhere'],
    ],
  },
  sorting: {
    recognition: [
      'Ordering unlocks simpler downstream logic.',
      'Problem can be converted to interval/greedy after sorting.',
      'Need deterministic arrangement by key(s).',
    ],
    systemUse:
      'Sorting underpins database query plans, analytics pipelines, and event chronology reconstruction.',
    approach:
      'Choose algorithm by constraints: stability, memory, partially sorted input, and value range.',
    pitfalls: [
      ['Comparator bug', 'Non-transitive order gives bad output', 'Test equal keys and tie-break rules'],
      ['Unnecessary full sort', 'Extra O(n log n) cost', 'Use selection/heap if only top-k needed'],
      ['Ignoring stability', 'Order-sensitive logic breaks', 'Use stable sort when downstream depends on prior order'],
    ],
  },
  recursion: {
    recognition: [
      'Problem naturally decomposes into smaller identical subproblems.',
      'Backtracking over choices with undo steps is required.',
      'Tree/graph traversal depth-first formulation is natural.',
    ],
    systemUse:
      'Recursion is foundational for parsers, tree processing, and exhaustive search with pruning.',
    approach:
      'Write base case first, then recurrence, then cleanup/backtrack step if state is shared.',
    pitfalls: [
      ['Missing base case', 'Stack overflow', 'Define explicit termination for every branch'],
      ['Shared mutable state', 'Cross-branch contamination', 'Backtrack or copy state before recursion'],
      ['Exponential blow-up', 'Timeout on medium input', 'Memoize overlapping subproblems'],
    ],
  },
  'bfs-dfs': {
    recognition: [
      'Need traversal across connected structure.',
      'BFS for shortest hops in unweighted graph; DFS for exhaustive exploration.',
      'You must visit each node/edge once with tracking.',
    ],
    systemUse:
      'BFS/DFS drive routing, dependency crawling, recommendation expansion, and cycle detection.',
    approach:
      'Pick traversal based on goal: level order (BFS) vs path-first reasoning (DFS).',
    pitfalls: [
      ['No visited set', 'Repeated processing or infinite loops', 'Mark visited before pushing neighbors'],
      ['Queue/stack confusion', 'Traversal order incorrect', 'Use queue for BFS and stack/recursion for DFS'],
      ['Disconnected graph miss', 'Some nodes never processed', 'Loop through all nodes for multi-component graphs'],
    ],
  },
  'dynamic-programming': {
    recognition: [
      'Optimal answer reuses solutions to overlapping subproblems.',
      'Choices form state transitions with deterministic recurrence.',
      'Brute force repeats identical work exponentially.',
    ],
    systemUse:
      'DP appears in optimization engines, sequence alignment, pricing models, and scheduling.',
    approach:
      'Define state dimensions clearly. Most DP bugs come from wrong state definition, not recurrence syntax.',
    pitfalls: [
      ['State too large', 'Memory blows up', 'Compress dimensions when transition only needs previous row'],
      ['Transition omission', 'Suboptimal result', 'List all possible previous states explicitly'],
      ['Initialization error', 'Everything downstream wrong', 'Write base cases and verify first rows manually'],
    ],
  },
  greedy: {
    recognition: [
      'Local optimal choices can be justified globally.',
      'Sorting by one criterion simplifies decisions.',
      'DP feels possible but expensive; proof of exchange argument exists.',
    ],
    systemUse:
      'Greedy solutions power interval scheduling, bandwidth allocation, and compression techniques.',
    approach:
      'Before coding, write why local choice is safe. Without proof, greedy can be dangerously wrong.',
    pitfalls: [
      ['No proof', 'Passes examples but fails hidden tests', 'Use exchange or cut-and-paste argument'],
      ['Wrong sort key', 'Suboptimal choices', 'Validate against counterexamples'],
      ['Edge tie handling', 'Inconsistent outputs', 'Define deterministic tie-break strategy'],
    ],
  },
  'divide-conquer': {
    recognition: [
      'Problem splits into independent subproblems and combines results.',
      'Recurrence resembles T(n)=aT(n/b)+f(n).',
      'Parallelizable structure exists.',
    ],
    systemUse:
      'Divide-and-conquer appears in merge sort, FFT, closest pair, and parallel processing systems.',
    approach:
      'Keep combine step linear when possible; expensive combine negates benefits.',
    pitfalls: [
      ['Imbalanced split', 'Depth grows too much', 'Split near midpoint or by median'],
      ['Costly merge', 'No real speedup', 'Design compact summary objects to combine quickly'],
      ['Boundary overlap mistakes', 'Missing/duplicate elements', 'Use strict segment contracts'],
    ],
  },
  'bit-manipulation': {
    recognition: [
      'Need compact state, parity checks, masks, or subset enumeration.',
      'Operations involve powers of two or binary representation.',
      'Performance constraints suggest low-level constant-factor gains.',
    ],
    systemUse:
      'Bit tricks are used in permissions, bloom filters, chess engines, and compression.',
    approach:
      'Track invariant in binary form; print bits while debugging to avoid mental slips.',
    pitfalls: [
      ['Shift precedence confusion', 'Wrong arithmetic', 'Use parentheses in all bit expressions'],
      ['Sign issues', 'Unexpected negatives', 'Know language behavior for signed shifts'],
      ['Mask misuse', 'Accidentally clears needed bits', 'Name masks and document intent'],
    ],
  },
  'two-pointers': {
    recognition: [
      'Need pair/subarray relation in sorted or linearly scannable data.',
      'You can maintain an invariant while moving left/right boundaries.',
      'Nested loops can collapse to one pass.',
    ],
    systemUse:
      'Two-pointers is common in streaming filters, window analytics, and sequence alignment.',
    approach:
      'Define movement rule for each pointer before coding; ad-hoc movement breaks correctness.',
    pitfalls: [
      ['Pointer stagnation', 'Infinite loop', 'Guarantee at least one pointer moves each iteration'],
      ['Invalid invariant', 'Misses valid answers', 'State invariant in one sentence and test on edge cases'],
      ['Incorrect sort assumption', 'Wrong results on unsorted input', 'Sort first or use hash-based variant'],
    ],
  },
  'prefix-sum': {
    recognition: [
      'Multiple range sum/count queries appear.',
      'Need quick subarray calculations after one preprocessing pass.',
      'Difference between two cumulative states gives answer.',
    ],
    systemUse:
      'Prefix sums power analytics dashboards, cumulative metrics, and histogram-based queries.',
    approach:
      'Use one extra leading zero to simplify inclusive/exclusive boundaries and reduce off-by-one errors.',
    pitfalls: [
      ['Wrong index shift', 'Answer off by one segment', 'Use prefix[r+1]-prefix[l] consistently'],
      ['Overflow', 'Large sums wrap around', 'Use wide integer type'],
      ['Recompute repeatedly', 'Needless O(nq)', 'Precompute once and query O(1)'],
    ],
  },
  'topological-sort': {
    recognition: [
      'Dependencies define an order and cycles may invalidate schedule.',
      'Graph is directed and acyclic expectation is implicit.',
      'Need ordering where prerequisites appear first.',
    ],
    systemUse:
      'Topological sorting is core for build systems, course scheduling, and data pipeline orchestration.',
    approach:
      'Use Kahn for iterative indegree control or DFS postorder for recursion-based detection.',
    pitfalls: [
      ['Cycle not checked', 'Partial order returned as if valid', 'Verify result length equals node count'],
      ['Indegree update bug', 'Nodes never become available', 'Decrement exactly once per edge'],
      ['Graph init omission', 'Isolated nodes missing', 'Initialize all nodes before adding edges'],
    ],
  },
  'fast-slow-pointers': {
    recognition: [
      'Need cycle detection or midpoint in linked structure.',
      'Single pass with O(1) extra space is preferred.',
      'Relative speed of iterators can reveal structure.',
    ],
    systemUse:
      'Fast-slow pointers appear in loop detection, linked list transforms, and periodic process checks.',
    approach:
      'Move slow by one and fast by two; reason about relative distance, not absolute position.',
    pitfalls: [
      ['Null check order', 'Crash on short list', 'Guard fast and fast.next before advancing'],
      ['Wrong reset step', 'Cycle entry not found', 'After meeting, reset one pointer to head'],
      ['Premature termination', 'Missed cycle', 'Continue until pointers meet or fast exhausts'],
    ],
  },
  'merge-intervals': {
    recognition: [
      'Intervals overlap and need consolidation.',
      'Sorting by start enables linear merge pass.',
      'Queries ask for coverage, gaps, or merged ranges.',
    ],
    systemUse:
      'Interval merge logic powers calendar apps, resource allocation, and log compaction.',
    approach:
      'Sort first, then keep a current interval and extend or flush based on overlap checks.',
    pitfalls: [
      ['Unsorted input', 'Missed merges', 'Always sort by start ascending first'],
      ['Boundary definition mismatch', 'Touching intervals handled wrong', 'Clarify closed vs half-open intervals'],
      ['Mutating source unexpectedly', 'Downstream side effects', 'Build new result list explicitly'],
    ],
  },
  'monotonic-stack': {
    recognition: [
      'Need nearest greater/smaller element with one pass.',
      'Current element invalidates earlier candidates in bulk.',
      'Brute-force next/previous element is O(n²).',
    ],
    systemUse:
      'Monotonic stacks solve histogram, stock span, temperature, and visibility problems efficiently.',
    approach:
      'Decide stack monotonicity (increasing/decreasing) based on whether you need greater or smaller neighbors.',
    pitfalls: [
      ['Wrong monotonic direction', 'Outputs opposite relation', 'Map requirement to increasing/decreasing stack first'],
      ['Store value not index', 'Cannot compute distance answers', 'Store indices unless only value needed'],
      ['Forgetting cleanup', 'Pending elements unresolved', 'Process leftovers after traversal when required'],
    ],
  },
  'trie-pattern': {
    recognition: [
      'Need efficient multi-word prefix matching in large dictionary.',
      'Backtracking through board/string with shared prefixes is required.',
      'Prefix pruning can cut huge search space.',
    ],
    systemUse:
      'Trie pattern appears in auto-complete, dictionary search, and word-game solvers.',
    approach:
      'Use trie to prune impossible branches early before expensive DFS expansion.',
    pitfalls: [
      ['No pruning', 'Search still exponential', 'Stop DFS immediately when trie edge missing'],
      ['Duplicate reporting', 'Same word emitted many times', 'Mark used terminal nodes carefully'],
      ['Memory bloat', 'Large trie overhead', 'Compress child representation for sparse alphabets'],
    ],
  },
  'modified-binary-search': {
    recognition: [
      'Data is mostly sorted with a structural twist (rotation, bounds, predicate).',
      'Need logarithmic search despite non-trivial condition.',
      'Answer can be framed as first/last true in monotonic predicate.',
    ],
    systemUse:
      'Modified binary search appears in APIs with threshold tuning and search over monotonic answer spaces.',
    approach:
      'Define predicate monotonicity first, then enforce interval invariants exactly.',
    pitfalls: [
      ['Broken invariant', 'Loop never converges', 'Use consistent inclusive/exclusive boundaries'],
      ['Wrong mid update', 'Skips candidate answer', 'Choose mid bias by which boundary you keep'],
      ['Overflow in other languages', 'Incorrect mid value', 'Compute mid as left+(right-left)//2'],
    ],
  },
  'top-k-elements': {
    recognition: [
      'Need best k items, not full sorted order.',
      'Streaming input requires online maintenance of current top set.',
      'k is much smaller than n.',
    ],
    systemUse:
      'Top-k logic powers search ranking, recommendation candidate generation, and real-time analytics.',
    approach:
      'Use a size-k min heap for largest-k problems so smallest kept item is easy to evict.',
    pitfalls: [
      ['Sort everything', 'O(n log n) wasted work', 'Maintain heap of size k for O(n log k)'],
      ['Wrong comparator', 'Returns least instead of greatest', 'Validate with tiny sanity test'],
      ['Ignoring duplicates', 'Missing expected repeated values', 'Clarify if distinctness is required'],
    ],
  },
};

function getTopicSpecificSnippet(topicId, topicName) {
  if (topicId === 'strings') {
    return `<span class="kw">def</span> <span class="fn">is_anagram</span>(a, b):
    <span class="kw">if</span> <span class="kw">len</span>(a) != <span class="kw">len</span>(b): <span class="kw">return</span> <span class="kw">False</span>
    freq = {}
    <span class="kw">for</span> ch <span class="kw">in</span> a: freq[ch] = freq.get(ch, <span class="num">0</span>) + <span class="num">1</span>
    <span class="kw">for</span> ch <span class="kw">in</span> b:
        <span class="kw">if</span> ch <span class="kw">not in</span> freq: <span class="kw">return</span> <span class="kw">False</span>
        freq[ch] -= <span class="num">1</span>
        <span class="kw">if</span> freq[ch] < <span class="num">0</span>: <span class="kw">return</span> <span class="kw">False</span>
    <span class="kw">return</span> <span class="kw">True</span>`;
  }
  if (topicId === 'monotonic-stack') {
    return `<span class="kw">def</span> <span class="fn">next_greater</span>(nums):
    ans = [-<span class="num">1</span>] * <span class="kw">len</span>(nums)
    stack = []  <span class="cmt"># indices, decreasing values</span>
    <span class="kw">for</span> i, x <span class="kw">in</span> <span class="kw">enumerate</span>(nums):
        <span class="kw">while</span> stack <span class="kw">and</span> nums[stack[-<span class="num">1</span>]] < x:
            ans[stack.pop()] = x
        stack.append(i)
    <span class="kw">return</span> ans`;
  }
  if (topicId === 'topological-sort') {
    return `<span class="kw">from</span> collections <span class="kw">import</span> deque

<span class="kw">def</span> <span class="fn">topo_sort</span>(n, edges):
    g = [[] <span class="kw">for</span> _ <span class="kw">in</span> <span class="kw">range</span>(n)]
    indeg = [<span class="num">0</span>] * n
    <span class="kw">for</span> u, v <span class="kw">in</span> edges:
        g[u].append(v); indeg[v] += <span class="num">1</span>
    q = deque([i <span class="kw">for</span> i <span class="kw">in</span> <span class="kw">range</span>(n) <span class="kw">if</span> indeg[i] == <span class="num">0</span>])
    order = []
    <span class="kw">while</span> q:
        u = q.popleft(); order.append(u)
        <span class="kw">for</span> v <span class="kw">in</span> g[u]:
            indeg[v] -= <span class="num">1</span>
            <span class="kw">if</span> indeg[v] == <span class="num">0</span>: q.append(v)
    <span class="kw">return</span> order`;
  }
  if (topicId === 'union-find') {
    return `<span class="kw">class</span> <span class="tp">DSU</span>:
    <span class="kw">def</span> <span class="fn">__init__</span>(self, n):
        self.p = <span class="kw">list</span>(<span class="kw">range</span>(n))
        self.sz = [<span class="num">1</span>] * n
    <span class="kw">def</span> <span class="fn">find</span>(self, x):
        <span class="kw">if</span> self.p[x] != x:
            self.p[x] = self.find(self.p[x])
        <span class="kw">return</span> self.p[x]
    <span class="kw">def</span> <span class="fn">union</span>(self, a, b):
        ra, rb = self.find(a), self.find(b)
        <span class="kw">if</span> ra == rb: <span class="kw">return</span> <span class="kw">False</span>
        <span class="kw">if</span> self.sz[ra] < self.sz[rb]: ra, rb = rb, ra
        self.p[rb] = ra; self.sz[ra] += self.sz[rb]
        <span class="kw">return</span> <span class="kw">True</span>`;
  }
  if (topicId === 'hash-maps') {
    return `<span class="kw">def</span> <span class="fn">two_sum</span>(nums, target):
    seen = {}
    <span class="kw">for</span> i, x <span class="kw">in</span> <span class="kw">enumerate</span>(nums):
        need = target - x
        <span class="kw">if</span> need <span class="kw">in</span> seen: <span class="kw">return</span> [seen[need], i]
        seen[x] = i
    <span class="kw">return</span> []`;
  }
  return `<span class="kw">def</span> <span class="fn">solve</span>(items):
    <span class="str">"""Template for ${topicName} problems."""</span>
    state = {}
    <span class="kw">for</span> i, item <span class="kw">in</span> <span class="kw">enumerate</span>(items):
        state[i] = item
    <span class="kw">return</span> state`;
}

function generatePlaceholderSections(topicId, data) {
  const concept1 = data.toc?.[0] || 'Core idea';
  const concept2 = data.toc?.[1] || 'Pattern';
  const concept3 = data.toc?.[2] || 'Template';
  const topicName = data.title;
  const complexity = data.complexity;
  const snippet = getTopicSpecificSnippet(topicId, topicName);
  const profile = topicProfiles[topicId] || {};
  const recognitionHints = profile.recognition || [
    `Input constraints suggest we cannot use brute-force for ${topicName}.`,
    `Questions mention "optimize", "kth", "shortest", "longest", or repeated queries.`,
    `Problem naturally maps to ${concept1}, ${concept2}, or ${concept3}.`,
  ];
  const systemUse = profile.systemUse ||
    `${topicName} appears in real systems when we need speed, predictable memory use, and clean invariants under edge cases.`;
  const approach = profile.approach ||
    'Use this thinking order: model the state, define transitions, enforce invariants, and validate with edge cases.';
  const pitfalls = profile.pitfalls || [
    ['Boundary bug', 'Fails on empty/small inputs', 'Test [] and [x] first'],
    ['Wrong invariant', 'Works on examples but fails hidden tests', 'Write the invariant in one sentence before coding'],
    ['State leak', 'Random incorrect output on later steps', 'Reset or clone mutable structures'],
  ];

  return `
<div class="section">
  <div class="section-label"><div class="section-num">1</div><h2>Overview & Intuition</h2></div>
  <p>${data.subtitle}</p>
  <p>${systemUse} In interviews, this topic tests both your data-modeling skills and your ability to reason about complexity under constraints.</p>
  <div class="callout info"><div class="callout-icon">💡</div><div class="callout-body"><p><strong>Recognition checklist:</strong></p><ul><li>${recognitionHints[0]}</li><li>${recognitionHints[1]}</li><li>${recognitionHints[2]}</li></ul></div></div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">2</div><h2>How It Works</h2></div>
  <p>${approach} This avoids the most common source of bugs: incorrect assumptions at boundaries.</p>
  <table class="pattern-table">
    <tr><th>Step</th><th>What to Decide</th><th>Practical Check</th></tr>
    <tr><td>1. Model</td><td>What is the state we track?</td><td>Can state fully describe progress?</td></tr>
    <tr><td>2. Transition</td><td>How state changes each step</td><td>Does every step reduce uncertainty?</td></tr>
    <tr><td>3. Guardrails</td><td>Boundaries and invalid cases</td><td>Did you handle empty/singleton input?</td></tr>
    <tr><td>4. Output</td><td>What answer format is required?</td><td>Indices vs values vs length</td></tr>
  </table>
  <div class="diagram">
    <div><strong>Mental Flow:</strong> Observe pattern → Choose DS/algorithm → Write invariant → Code template → Dry-run 2 edge cases</div>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">3</div><h2>Complexity Cheat Sheet</h2></div>
  <table class="pattern-table">
    <tr><th>Operation</th><th>Time Complexity</th><th>Space</th></tr>
    <tr><td>Access</td><td><code>${complexity.access}</code></td><td rowspan="5"><code>${complexity.space}</code></td></tr>
    <tr><td>Search</td><td><code>${complexity.search}</code></td></tr>
    <tr><td>Insert</td><td><code>${complexity.insert}</code></td></tr>
    <tr><td>Delete</td><td><code>${complexity.delete}</code></td></tr>
  </table>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">4</div><h2>Worked Example + Template</h2></div>
  <p>Start from this implementation and adapt it to ${concept1}, ${concept2}, and ${concept3} variants. During interviews, explain your invariant before writing code.</p>
  <div class="code-block">
    <div class="code-header"><span class="code-lang">Python</span><span class="code-title">template_${topicName.toLowerCase().replace(/\s+/g, '_')}.py</span><button class="copy-btn" onclick="copyCode(this)">Copy</button></div>
    <pre>${snippet}</pre>
  </div>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">5</div><h2>Pitfalls & Debug Checklist</h2></div>
  <div class="callout warn"><div class="callout-icon">⚠️</div><div class="callout-body"><p><strong>Common mistakes:</strong> off-by-one boundaries, mutating shared state unexpectedly, and returning early before updating global best answer.</p></div></div>
  <table class="pattern-table">
    <tr><th>Pitfall</th><th>Symptom</th><th>Fix</th></tr>
    <tr><td>${pitfalls[0][0]}</td><td>${pitfalls[0][1]}</td><td>${pitfalls[0][2]}</td></tr>
    <tr><td>${pitfalls[1][0]}</td><td>${pitfalls[1][1]}</td><td>${pitfalls[1][2]}</td></tr>
    <tr><td>${pitfalls[2][0]}</td><td>${pitfalls[2][1]}</td><td>${pitfalls[2][2]}</td></tr>
  </table>
</div>

<div class="section">
  <div class="section-label"><div class="section-num">6</div><h2>When To Use This Topic</h2></div>
  <p>Use ${topicName} when straightforward brute force is too costly and the problem hints at one-pass processing, monotonic behavior, reusable preprocessing, or constrained search.</p>
  <table class="pattern-table">
    <tr><th>Prompt Clue</th><th>Likely Approach</th></tr>
    <tr><td>"Kth / Top K / Priority"</td><td>Heap or partial ordering strategy</td></tr>
    <tr><td>"Connected / Components"</td><td>Union-Find or graph traversal</td></tr>
    <tr><td>"Subarray / Substring optimum"</td><td>Sliding window, prefix sum, or two-pointers</td></tr>
    <tr><td>"Dependencies / ordering"</td><td>Topological sort</td></tr>
  </table>
  <div class="callout tip"><div class="callout-icon">✅</div><div class="callout-body"><p><strong>Practice plan:</strong> solve 5 easy, 10 medium, and 5 hard problems with written complexity analysis after each solution. Keep one notebook section for invariants and one for mistakes.</p></div></div>
</div>
`;
}

// ──────────────────────────────────────────────

for (const [id, data] of Object.entries(placeholderContent)) {
  if (!content[id]) {
    content[id] = { ...data, sections: generatePlaceholderSections(id, data) };
  }
}

for (const id of placeholderTopics) {
  if (!content[id]) {
    const inferredTitle = id.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
    const fallback = {
      title: inferredTitle,
      subtitle: `${inferredTitle} is a high-impact interview topic. Build intuition first, then master templates and edge cases.`,
      category: getCategoryLabelByTopicId(id),
      tags: [{label:'Topic',type:'algo'},{label:'Interview',type:'pattern'},{label:'Deep Dive',type:'complexity'}],
      complexity: {access:'—',search:'O(n)',insert:'—',delete:'—',space:'O(1) to O(n)'},
      toc: ['Overview','Core Idea','Worked Example','Code Template','Pitfalls','Practice Plan'],
    };
    content[id] = {
      ...fallback,
      sections: generatePlaceholderSections(id, fallback)
    };
  }
}

export function getCategories() {
  return categories;
}

export function getTopicById(id) {
  return content[id] || null;
}

export function getAllTopicIds() {
  return Object.keys(content);
}

export function getAllTopics() {
  return content;
}
