import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as a,e as n}from"./app.010c637d.js";const r={},t=n(`<h3 id="problem" tabindex="-1"><a class="header-anchor" href="#problem" aria-hidden="true">#</a> Problem:</h3><p>Read it at the <a href="https://leetcode.com/problems/valid-palindrome/" target="_blank" rel="noopener noreferrer">leetcode</a></p><h3 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution:</h3><p>Here we are gonna use Regex (Regular expressions).</p><p>Regular expressions are patterns used to match character combinations in strings.</p><h4 id="pseudocode" tabindex="-1"><a class="header-anchor" href="#pseudocode" aria-hidden="true">#</a> PseudoCode:</h4><ol><li><p>We have to remove all <strong>non-Alpanumeric</strong> characters (Using <code>Regex</code>) and convert them to lower case</p></li><li><p>Now we just have to check if output string if it&#39;s palindrome or not</p></li><li><p>Initiate the loop and check first element with last element</p></li><li><p>If they are same repeat the step by incrementing the <code>left</code> and decrementing <code>right</code> pointer</p></li><li><p>If they are not the same we can instantly return <code>false</code></p></li><li><p>After the loop is complete we can say our string is palindrome and return <code>true</code></p></li></ol><h3 id="algorithm" tabindex="-1"><a class="header-anchor" href="#algorithm" aria-hidden="true">#</a> Algorithm:</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s){
    s = s.replace(/[^A-Za-z0-9]/g,&#39;&#39;).toLowerCase() // we check replace except A-Z,
                                                    // a-z,0-9  with &#39;&#39;(empty)
    for(let i = 0; i &lt; s.length; i++){
        if(s[i] !== s[s.length - 1 - i]) return false
    }
    return true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),s=[t];function l(o,d){return i(),a("div",null,s)}var p=e(r,[["render",l],["__file","125. Valid Palindrome.html.vue"]]);export{p as default};
