import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        String letter = new Scanner(System.in).next().toLowerCase();
        if (letter.matches("[a-z]")) {
            if ("aeiou".contains(letter)) System.out.println("Vowel");
            else System.out.println("Consonant");
        } else System.out.println("Invalid input");
    }
}
