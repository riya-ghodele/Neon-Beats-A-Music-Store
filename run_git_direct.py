import os
import subprocess

os.chdir(r"d:\Riya\Music Store")

commands = [
    ["git", "init"],
    ["git", "add", "."],
    ["git", "commit", "-m", "Initial commit with new UI and assets"],
    ["git", "branch", "-M", "main"],
    ["git", "remote", "add", "origin", "https://github.com/riya-ghodele/Neon-Beats-A-Music-Store.git"],
    ["git", "remote", "set-url", "origin", "https://github.com/riya-ghodele/Neon-Beats-A-Music-Store.git"],
    ["git", "push", "-u", "origin", "main"]
]

for cmd in commands:
    print(f"\n> {' '.join(cmd)}")
    try:
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.stdout:
            print(res.stdout)
        if res.stderr:
            print("ERR:", res.stderr)
        if res.returncode != 0:
            print(f"Command failed with exit code {res.returncode}")
    except Exception as e:
        print("Exception:", e)
