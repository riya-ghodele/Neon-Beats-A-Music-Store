import os
import subprocess

os.chdir(r"d:\Riya\Music Store")

print("\n=== Setting up Git and uploading ===")
commands = [
    "git init",
    "git add .",
    "git commit -m \"Initial commit with new UI and assets\"",
    "git branch -M main",
    "git remote add origin https://github.com/riya-ghodele/Neon-Beats-A-Music-Store.git",
    "git remote set-url origin https://github.com/riya-ghodele/Neon-Beats-A-Music-Store.git",
    "git push -u origin main"
]

for cmd in commands:
    print(f"\n> {cmd}")
    res = subprocess.run(cmd, shell=True)
    if res.returncode != 0:
        print(f"Command failed with exit code {res.returncode}")
