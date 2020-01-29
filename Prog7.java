public class Prog7{

    public static void main(String args[]){

        int[] numbers = {3,5,7,6,3,2,9};

        int sum = 0;
        for( int i:numbers){
            sum=sum+i;
        }
    

        

       
        for(int i=0; i<numbers.length;i++){
            System.out.println("number: "+ numbers[i] );
        
            if(numbers[i] ==7){

                System.out.println("Hi EVERYONE");
    
    
            }
            
        }

        
        System.out.println("the sum is: "+ sum);

        

    }
}