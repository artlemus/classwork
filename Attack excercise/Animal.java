public class Animal{

    String name;
    String type;
    


    public Animal(String name,String type){
        this.name=name;
        this.type=type;
    }

    public void attack(Student s){
        System.out.println(this.name +" "+ this.type + " is attacking ..." + s.name);
    }
}