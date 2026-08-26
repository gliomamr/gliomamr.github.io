# GliMR's Website

<p align="center">
	<img src="static/Images/hero/main.png" alt="GliMR banner" width="100%">
</p>

This is the repository of GliMR's website. It's goal is to share information about the initiative, its mission, task forces, events, resources, and ways to get involved.

## How to edit the website locally

### 1. Fork the repository
On the terminal, run:

```bash
git clone https://github.com/gliomamr/gliomamr.github.io.git
```

### 2. Install Hugo and submodules

This website requires **Hugo**.

On macOS, install it with Homebrew:

```bash
brew install hugo
```

On Linux, install it with Snap:

```bash
sudo snap install hugo
```

On Windows, install it with Windows Package Manager:

```powershell
winget install Hugo.Hugo.Extended
```

Install the **github submodule** so that the theme is available:

```bash
git submodule update --init --recursive
```

### 3. Start the local server

Open a terminal in the **project folder** and run:

```bash
hugo server
```

Then open [http://localhost:1313](http://localhost:1313) in a browser. Hugo will automatically rebuild the website when you edit files.

Stop the server with `Ctrl+C`.

### 4. Edit the website and push your changes

Edit the files in the **project folder** and commit your changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

It is important to write a clear commit message that describes the changes you made.

After pushing your changes, make a **pull request** on GitHub to merge your changes into the main branch. Once approved, your changes will be live on the website.