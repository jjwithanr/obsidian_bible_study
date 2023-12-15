// main.js
module.exports = {
  formatText: function () {
    let editor = this.app.workspace.activeLeaf.view.sourceMode.cmEditor;
    let selectedText = editor.getSelection();
    
    // Split the selected text into lines
    let lines = selectedText.split('\n');
    
    // Create a new formatted text
    let formattedText = lines.map((line, index) => {
      return `#### v.${index + 1}\n>${line}`;
    }).join('\n\n');

    // Replace the selected text with the formatted text
    editor.replaceSelection(formattedText);
  },

  onload: function () {
    console.log('Bible Formatter Plugin Loaded');
    
    // Add the "Format Text" command to the editor
    this.registerEvent(this.app.workspace.on('editor-menu', (menu, editor) => {
      menu.addItem((item) => {
        item.setTitle('Format Text')
          .setIcon('format-text') // Add a custom icon if desired
          .onClick(() => this.formatText());
      });
    }));
  },

  onunload: function () {
    console.log('Bible Formatter Plugin Unloaded');
  }
};
