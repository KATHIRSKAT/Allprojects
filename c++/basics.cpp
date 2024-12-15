#include <iostream>
using namespace std;

int main() {
    int n=5;
    for (int i = 1; i<= 2*n ; i++)
    {
        int c = i>n ? 2*n - i : i; ;
        
        for ( int j = 1; j<=c; j++)
        {
            cout<<"*";
        }
        cout<<endl;
    }
    for (int i = 1; i<= 2*n ; i++)
    {
        int c = i>n ? 2*n - i : i; ;
        int d= n-c;
        for (int s = 0 ; s<d; s++)
        {
            cout<<" ";
        }
        for ( int j = 1; j<=c; j++)
        {
            cout<<"*";
        }
        cout<<endl;
    }
    return 0;
}
    
