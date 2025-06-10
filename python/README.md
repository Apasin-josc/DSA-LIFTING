### extensions
1. Code Runner
2. Jupyter
3. Pylance
4. Python

### setup
we can run our code by clicking on the `▶️` icon at the top-right OR running `Ctrl + Alt + N`
to clear everytime that we run the code: go to settings -> extensions -> Run Code configuration -> [✅] Clear Previous Output
to avoid all the `[Running] python -u "c:\Users\Omar.Sanchez\DSA-LIFTING\python\Hello_World.py"`: go to settings -> extensions -> Run Code configuration -> [ ] Show Execution Message


### to change an icon
'settings.json' 
"material-icon-theme.folders.associations": {
  "front-end": "src",
  "back-end": "server",
  "roadmap": "server",
},


### to check in real time the files
nodemon --exec "python" --watch . --ext py {nameOfTheProblem}.py
npm run python-dev -- .\python\roadmap\{category}\{nameOfTheProblem}