  <div class="controls">
    <div class="control-group">
      <label for="charSet">Character Set:</label>
      <select id="charSet" onchange="updateSettings()">
        <option value="tech1">Tech/Code Symbols 1</option>
        <option value="tech2">Tech/Code Symbols 2</option>
        <option value="math">Math & Binary</option>
        <option value="cryptic">Cryptic/Alien</option>
        <option value="mixed">Mixed Languages</option>
        <option value="alphabet">Alphabet</option>
        <option value="matrix1">Matrix 1</option>
        <option value="matrix2">Matrix 2</option>
        <option value="matrix3">Chinese Characters</option>
        <option value="matrix4">Japanese Kanji</option>
        <option value="emoji1">Emoji 1</option>
        <option value="emoji2">Emoji 2</option>
        <option value="emoji3">Emoji 3</option>
      </select>
    </div>
    
    <div class="control-group">
      <label for="customText">Custom Text:</label>
      <textarea id="customText" class="custom-text" placeholder="Enter custom text..."></textarea>
    </div>
    
    <div class="control-group">
      <label for="revealSpeed">Reveal Speed:</label>
      <input type="range" id="revealSpeed" min="1" max="10" value="10" onchange="updateSettings()">
    </div>
    
    <div class="control-group">
      <label for="changeFreq">Change Frequency:</label>
      <input type="range" id="changeFreq" min="1" max="100" value="28" onchange="updateSettings()">
    </div>
    
    <div class="control-group">
      <label for="glowIntensity">Glow Intensity</label>
      <input type="range" id="glowIntensity" min="0" max="20" value="8" onchange="updateGlow()">
    </div>
    
    <div class="control-group">
      <label>Colors:</label>
      <div class="color-picker">
        <input type="color" id="bgColor" value="#111111" class="color-input" onchange="updateColors()">
        <input type="color" id="textColor" value="#00ff00" class="color-input" onchange="updateColors()">
      </div>
    </div>
    
    <button class="btn" onclick="playAnimation()">Reveal Text</button>
  </div>
  <div class="text-container" id="text"></div>
