import{_ as e,r as t,o,c as p,a as n,b as c,F as r,d as a,e as l}from"./app.75efdc9b.js";const i={},d=n("h2",{id:"leetcode-69-sqrt-x-leetcode-solution-javascript",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#leetcode-69-sqrt-x-leetcode-solution-javascript","aria-hidden":"true"},"#"),a(" Leetcode 69. Sqrt(x) LeetCode Solution Javascript")],-1),u={id:"problem-read-it-at-the-leetcode",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#problem-read-it-at-the-leetcode","aria-hidden":"true"},"#",-1),h=a(" Problem: Read it at the "),m={href:"https://leetcode.com/problems/sqrtx/",target:"_blank",rel:"noopener noreferrer"},b=a("leetcode"),f=l(`<h3 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution:</h3><p>Here we are going to use BST (Binary Search Technique). Basically we divide our problem in half (Binary) and iterate this process untill the problem is solved.</p><h3 id="pseudocode" tabindex="-1"><a class="header-anchor" href="#pseudocode" aria-hidden="true">#</a> PseudoCode:</h3><p>Let us consider that we have a <code>x</code> = 10 and we have to calculate square root of that number. For that we have to check every number from <code>1 - 10</code>.</p><ol><li><p>define <code>left = 1</code> and <code>right = x</code></p></li><li><p>if <code>x</code> is 0, return 0 and if <code>x</code> is 1, return 1 - Base condition</p></li><li><p>loop until <code>left</code> &lt; <code>right</code> - Stopping condition</p></li><li><p>calculate <code>mid</code></p></li><li><p>if mid * mid is equal to <code>x</code>, return <code>x</code></p></li><li><p>if mid * mid is more than <code>x</code> then we can eliminate the right part</p></li><li><p>if mid * mid is less than <code>x</code>then we can elimate the left part and continue to loop</p></li><li><p>once the loop finishes we return <code>left - 1</code></p></li></ol><h2 id="algorithm" tabindex="-1"><a class="header-anchor" href="#algorithm" aria-hidden="true">#</a> Algorithm:</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">mySqrt</span> <span class="token operator">=</span>  <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> right <span class="token operator">=</span> x
    <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x
    <span class="token keyword">while</span><span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> mid <span class="token operator">=</span> left <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span> mid <span class="token operator">*</span> mid <span class="token operator">===</span> x<span class="token punctuation">)</span> <span class="token keyword">return</span> mid
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>mid <span class="token operator">*</span> mid <span class="token operator">&gt;</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
            right <span class="token operator">=</span> mid 
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>mid <span class="token operator">*</span> mid <span class="token operator">&lt;</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span>
            left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> left <span class="token operator">-</span> <span class="token number">1</span>     <span class="token comment">// remember while loop stops at left = mid + 1 </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>`,7);function _(x,w){const s=t("ExternalLinkIcon");return o(),p(r,null,[d,n("h5",u,[k,h,n("a",m,[b,c(s)])]),f],64)}var v=e(i,[["render",_],["__file","69. Sqrt(x).html.vue"]]);export{v as default};
