from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1280, "height": 3000}) # Tall viewport to help with scrolling context

        # Navigate to the landing page
        page.goto("http://localhost:3003")
        time.sleep(2) # Wait for load

        # Scroll to the Operational Logic section
        # It's at the bottom, so we need to scroll down.
        # Let's find the section by text "Operational Logic Flow"

        # Step 1: Ingest
        # Scroll until "Operational Logic Flow" is in view
        logic_section = page.locator("text=Operational Logic Flow")
        logic_section.scroll_into_view_if_needed()
        time.sleep(1)

        # Adjust scroll to make sure the start is visible
        page.evaluate("window.scrollBy(0, -200)")
        time.sleep(2)
        page.screenshot(path="step1_ingest.png")
        print("Captured step1_ingest.png")

        # Step 2: Analyze
        # Scroll down a bit more to trigger the second step
        page.evaluate("window.scrollBy(0, 400)")
        time.sleep(2)
        page.screenshot(path="step2_analyze.png")
        print("Captured step2_analyze.png")

        # Step 3: Execute
        # Scroll down more
        page.evaluate("window.scrollBy(0, 400)")
        time.sleep(2)
        page.screenshot(path="step3_execute.png")
        print("Captured step3_execute.png")

        # Splash Screen
        # Scroll to the bottom
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(2)
        page.screenshot(path="splash_screen.png")
        print("Captured splash_screen.png")

        browser.close()

if __name__ == "__main__":
    run()
