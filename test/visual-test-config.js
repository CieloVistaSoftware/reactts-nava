module.exports = {
  // Use test/visual-test-index.tsx as the entry point instead of src/index.tsx
  entry: './test/visual-test-index.tsx',
  
  // Output to test/build directory
  output: {
    path: __dirname + '/test/build',
    filename: 'bundle.js'
  },
  
  // Resolve extensions
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  
  // Use the same module rules as create-react-app
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        use: ['file-loader']
      }
    ]
  }
};
