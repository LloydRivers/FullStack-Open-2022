import java.io.FileInputStream;
import java.io.IOException;

public class FileReadingExample {
    public static void main(String[] args) {
        try {
            FileInputStream myFileInputStream = new FileInputStream("myFile.txt");
            int counterVar = 0;

            while ((counterVar = myFileInputStream.read()) != -1) {
                System.out.print((char) counterVar);
            }

            myFileInputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
