### extensions
C/C++ Microsoft

### installer
https://code.visualstudio.com/docs/cpp/config-mingw

###  on the MSYS2 shell
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain

hit enter and then 'Y'

### Local environment paths
click on environment variables -> Path -> Edit... -> new --> `C:\msys64\ucrt64\bin`


### checking the mgw installation
gcc --version
g++ --version
gdb --version

### vs code
issue with iostream --> `Ctrl+Shift+P` 
C/C++: Select IntelliSense Configuration...
` g++.exe Found at C:/msys64/ucrt64/bin/ `