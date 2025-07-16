#include<iostream>
using namespace std;

/* int main()
{
    int a, b, c;

    cout << "enter two numbers";

    cin >> a >> b;
    
    c = a + b;

    cout << "the addition is" << " " << c;

    return 0;
} */


int main()
{
    string name;

    cout << "enter your name";

    getline(cin, name);

    cout << "hello there " << name;

    return 0;
}