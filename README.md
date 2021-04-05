# mdpgroup-frontend-task
A partial Spotify Clone with a playlist search algorithm

<a href="https://ibb.co/Qb15Qs1"><img src="https://i.ibb.co/r71W0n1/Screenshot-from-2021-04-05-08-30-11.png" alt="App Image" border="0"></a>

## Insights
### Rendering
In this project, I focused on rendering optimization. I have followed the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/) to increase the efficiency and maintainability of the application. Further to that, I have used Redux to reduce the number of renders. I have kept track of the renders and I have always thought of the decisions I was making when it comes to create a new component or inject a new service. When I compound the atomic design with a single source of truth, the result was beyond my expectations. None of the components in the tree, including the root, has to render when the API is injected via a service except the deepest children nodes.
### Searching and Debounce
I have optimized `SearchBar` and `PlaylistMenu` by creating them as separate components. This decision reduced the number of renders for `PlaylistWidget`(parent thereof) by half. Unfortunately, the issue was lying deep down in the `SearchBar` component . `onchange` event was triggered too much. And this was causing a state change and some really redundant renders. After thinking about how to solve the problem, I came up with an elegant solution. I have used `throttle` for events like `scroll`. Yet my way has never crossed with `debounce`. I have read a lot about it though. I used `loadash.debounce`. I didn't see any point of writing mine. Integrating it to the React was a little tiring due to the reallocation of function expressions in each render. However, I solved the issue after some effort.
### Why is there a Service for the API?
At the beginning of the app, I set an exact goal. The app could be a small one considering the scope and functionality therein. But I had to create an app that supports nearly an absolute extendibility. I took SOLID into consideration especially while creating a Service for injection. `App` does not merely use fetch manually. Instead, it uses `Spotify Service` for sending requests to the server. With this approach, the app became more extendable and less prone to give any error.
### A stateless ancestor
As it is clearly seen, `App` component has no state, neither from Redux nor from hooks. I have used a clever trick there by only getting the API data by services and not using it. This method is not bad when it is known that the API is immutable.
### Functional Approach
By making the app imperative instead of declarative, I gained three main benefits: Ease of refactoring, less code which means less error, and lastly immutability which reduces errors by not polluting the state.
### Filtering
Using `debounce` to reduce the number of renders was a good move. In addition, it reduced the processing time by reducing `filtering function` calls. I have tried a couple of approaches and optimizations for the `filtering function` and analyzed their performance. The problem is that there isn't any consistent result. Each browser has a different implementation of those functions. The one that I have settled with was the `Regex.test`. For many reasons, this approach was best for me. I have used an enhanced version of it though. Something like below:
```ts
const obtainFilter = (input: string) => {
    const patterns = input.split(' ');
    return (value: string) =>
        patterns.reduce(
            (currentResult, pattern) =>
                currentResult && new RegExp(pattern, 'i').test(value),
            true
        );
};
```
This function has a lot of bonus capabilities compared to the other ones. It is not case sensitive, thanks to the `i` flag. Assuming we have the playlist `Akustik Gece` and the input `ak`, it will match with the playlist. `obtainFilter` uses tokenization. With this feature when the input is `ak ge`, it can still detect it. Or even `ge ak` is detectable. One can argue that this approach will cause an excessive overhead. I can totally agree with that. I have come up with an idea to optimize this approach:
```
Assume we have a string with length N as a playlist and another one with length M as input. M has S tokens[K1, K2, ..., KS].
If the ith token of input is not found immediately break the loop and return false
Else hold the index of the last match and create a substring and assign it as a playlist
```
At first, this may seem tempting. But after analyzing both of the approaches I have found that the first was better in performance:
> Assumed that the RegExp ends when it finds the result (Finite Automaton)
```
Using the notation of the algorithm above,
Time Complexity Analysis
Approach I: (Input can be unordered)
S * (K1 + K2 + K3 + ... + KS) = S * ∑[i=1,S](Ki)
The best case would be 1 (only token at the first index)
This one is likely to happen to assume people always search playlists and albums with their first name
The average case is O(N) since indexes will be scattered start and the end
the worst case would be N * (N + 1) / 2 => O(N^2) which is polynomial
This is not likely to happen unless the user enters something like "a b c" for the playlist "abc"
Best Case: O(1)
Worst Case: O(N^2)
Average Case: O(N)
So the overall complexity is between O(N) and O(1) which is pretty good.
Approach II: (Input should be ordered)
S * (2N + K1 + (K2 - K1) + (K3 - K2 - K1) ... (KS - ∑[i=1,S-1](Ki)))
= S * (2N + (∑[i=0,S](Ki) - ∑[i=1,S-1](∑[j=1,i](Kj))))
This is interesting. At first you may see that right hand side is less than N in average but at a second look, left hand side is already 2N. Also worst case scenerio complexity didn't change. Since we add them up cumulatively.
Best Case: O(1) -> Didn't change
Worst Case: O(N^2) -> Didn't change
Average Case: O(N) -> Didn't change
Average case a little bit messy. For the second approach, it is definitely more than 2N but for adjacent indexes, II works better than the I. But again this is not very likely. There is no real benefit in implementing II considering all the redundant operations we have to do.
```
### What would I add if I had more time?
Definitely `Unit Testing` for both library modules and components. Also, I would work on `filtering` hoping may I find more optimal solutions.