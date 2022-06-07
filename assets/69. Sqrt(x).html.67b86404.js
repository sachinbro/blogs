import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as d,e as t}from"./app.c5b226fa.js";const a={},r=t(`<h2 id="leetcode-69-sqrt-x-leetcode-solution-javascript" tabindex="-1"><a class="header-anchor" href="#leetcode-69-sqrt-x-leetcode-solution-javascript" aria-hidden="true">#</a> Leetcode 69. Sqrt(x) LeetCode Solution Javascript</h2><h5 id="problem-read-it-at-the-leetcode" tabindex="-1"><a class="header-anchor" href="#problem-read-it-at-the-leetcode" aria-hidden="true">#</a> Problem: Read it at the <a href="https://leetcode.com/problems/sqrtx/" target="_blank" rel="noopener noreferrer">leetcode</a></h5><h3 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution:</h3><p>Here we are going to use BST (Binary Search Technique). Basically we divide our problem in half (Binary) and iterate this process untill the problem is solved.</p><h3 id="pseudocode" tabindex="-1"><a class="header-anchor" href="#pseudocode" aria-hidden="true">#</a> PseudoCode:</h3><p>Let us consider that we have a <code>x</code> = 10 and we have to calculate square root of that number. For that we have to check every number from <code>1 - 10</code>.</p><ol><li><p>define <code>left = 1</code> and <code>right = x</code></p></li><li><p>if <code>x</code> is 0, return 0 and if <code>x</code> is 1, return 1 - Base condition</p></li><li><p>loop until <code>left</code> &lt; <code>right</code> - Stopping condition</p></li><li><p>calculate <code>mid</code></p></li><li><p>if mid * mid is equal to <code>x</code>, return <code>x</code></p></li><li><p>if mid * mid is more than <code>x</code> then we can eliminate the right part</p></li><li><p>if mid * mid is less than <code>x</code>then we can elimate the left part and continue to loop</p></li><li><p>once the loop finishes we return <code>left - 1</code></p></li></ol><h2 id="algorithm" tabindex="-1"><a class="header-anchor" href="#algorithm" aria-hidden="true">#</a> Algorithm:</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>var mySqrt =  function(x){
    let left = 0, right = x
    if(x &lt; 2) return x
    while(left &lt; right){
        let mid = left + Math.floor((right - left) / 2)
        if( mid * mid === x) return mid
        else if(mid * mid &gt; x){
            right = mid 
        }
        else if(mid * mid &lt; x){
            left = mid + 1
        }
    }
    return left - 1     // remember while loop stops at left = mid + 1 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),l=[r];function o(n,c){return i(),d("div",null,l)}var m=e(a,[["render",o],["__file","69. Sqrt(x).html.vue"]]);export{m as default};
