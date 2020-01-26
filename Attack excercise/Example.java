public class Example{
    public static void main(String args[]){

        Student s1 = new Student("Efren",29,7);
        Student s2 = new Student("Art",28,7);
        Student s3 = new Student("Bob",99,1);
        User u1 = new User("Andres", 34);
        Animal a1 = new Animal("Machiato","Dog");
        Animal a2 = new Animal("Baby","Shark");
        Animal a3 = new Animal("Greg","The TREX");
        Animal a4 = new Animal("Preston","The Worm");


        s1.studentDisplay();
        System.out.println(u1.name);
        System.out.println(a1.name);

        a2.attack(s1);
        a3.attack(s2);
        a4.attack(s3);


    }

    
}