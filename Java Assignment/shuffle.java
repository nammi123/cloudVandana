import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class shuffle {

	public static void main(String[] args) {

		Integer[] arr = { 1, 2, 3, 4, 5, 6, 7 };

		List<Integer> ArrayList = Arrays.asList(arr);

		Collections.shuffle(ArrayList);

		ArrayList.toArray(arr);

		System.out.println(Arrays.toString(arr));
	}
}
