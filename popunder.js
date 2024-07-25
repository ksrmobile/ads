import javax.swing.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.io.IOException;
import java.awt.Desktop;
import java.net.URI;

public class PopunderExample {

    public static void main(String[] args) {
        // Create the main frame
        JFrame mainFrame = new JFrame("Main Window");
        mainFrame.setSize(400, 300);
        mainFrame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        mainFrame.setLocationRelativeTo(null);

        // Create a panel to capture clicks
        JPanel panel = new JPanel();
        mainFrame.add(panel);
        panel.setLayout(null);

        // Add mouse listener to the panel to open a URL on click
        panel.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                openPopunder();
            }
        });

        // Display the main frame
        mainFrame.setVisible(true);
    }

    private static void openPopunder() {
        // URL to open in a new window
        String url = "https://example.com";

        // Open URL in the system's default web browser
        try {
            if (Desktop.isDesktopSupported() && Desktop.getDesktop().isSupported(Desktop.Action.BROWSE)) {
                Desktop.getDesktop().browse(new URI(url));
            }
        } catch (IOException | java.net.URISyntaxException e) {
            e.printStackTrace();
        }
    }
}
