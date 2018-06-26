# React Pic Game
# 
## Memory Clicky Game - Click every picture once to win the game!

### biggest takeaways from this project: learned a lot about managing props and state. probably the hardest part of this assignment was using the .map() function properly. I first had it mapping from an array and then rendering the images depending on their location on the array. it worked to render the pictures and shuffle them, but I kept running into issues trying to add a false value to the images I was rendering. After some research I figured that an easier way to do this was to map the pics in the return, vs having a function do it on ComponentDidMount. after that I was able to target a pic's id via the event onClick and the logic wasn't difficult after that.  