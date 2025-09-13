"""
oop in python
"""

class Atm:
    #function vs methods. Method is a special function written in class
    def __init__(self):
        self.pin=""
        self.balance=0
        self.input_menu()
    
    def input_menu(self):
        user_input=int(input("""
                How to proceed?
              1. Enter 1 to create pin
              2. Enter 2 to deposit
              3. Enter 3 to withdraw
              4. Enter 4 to check balance
              5. Enter 5 to exit
                """))
        if user_input==1:
            print("Enter pin: ")
        elif user_input==2:
            print("Enter Amount: ")
        elif user_input==3:
            print("Enter Amount to withdraw:")
        elif user_input==4:
            print("Check balance")
        elif user_input==5:
            print("exit")
        else:
            print("Wrong number")
            
atm1=Atm()