import java.util.HashSet;
public class Pangram{
    public static boolean isPangram(String input) {
        HashSet<Character> letters = new HashSet<>();
        String str = input.replaceAll(" ", "").toLowerCase();
        for (char c : str.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                letters.add(c); 
            }
        }
        return letters.size() == 26;
    }

    public static void main(String[] args) {
        String input = "Hello guys";
        if (isPangram(input)) {
            System.out.println("pangram.");
        } else {
            System.out.println(" Notpangram.");
        }
    }
}
