# JagoIndiaJago Backend

## Installation

Follow these steps to set up the backend environment:

1. Navigate to the backend directory:
    ```sh
    cd backend
    ```

2. Create a virtual environment:
    ```sh
    python -m venv .venv
    ```

3. Activate the virtual environment:
    - On Windows:
        ```sh
        .venv\Scripts\Activate.ps1
        ```
    - On macOS/Linux:
        ```sh
        source .venv/bin/activate
        ```

4. Install the required packages:
    ```sh
    pip install "fastapi[standard]"
    ```

5. (Optional) If you have a `requirements.txt` file, install the dependencies:
    ```sh
    pip install -r requirements.txt
    ```

## Notes

- If you encounter an error with the `source` command on Windows, use the PowerShell activation script as shown above.
- Ensure you have Python 3.11.11 or later installed.
- To update pip, run:
    ```sh
    python.exe -m pip install --upgrade pip
    ```
