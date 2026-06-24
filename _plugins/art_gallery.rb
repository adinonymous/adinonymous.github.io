# Art Gallery Plugin - Auto-generates art_files from _art/ folder
# Place images/videos in _art/ and they will automatically appear in the gallery

module Jekyll
  class ArtGalleryGenerator < Generator
    safe true

    def generate(site)
      art_dir = File.join(site.source, '_art')
      art_files = []
      
      Jekyll.logger.info "Art Gallery:", "Scanning #{art_dir}" unless Dir.exist?(art_dir)
      return unless Dir.exist?(art_dir)
      
      # Supported file extensions
      image_exts = %w[.jpg .jpeg .png .gif .webp .svg]
      video_exts = %w[.mp4 .mov .webm .mkv]
      supported_exts = image_exts + video_exts
      
      # Scan _art/ directory for supported files
      Dir.glob(File.join(art_dir, '*')).each do |file|
        next unless File.file?(file)
        
        ext = File.extname(file).downcase
        next unless supported_exts.include?(ext)
        
        filename = File.basename(file)
        name = File.basename(file, File.extname(file))
        
        art_files << {
          'filename' => filename,
          'name' => name.tr('_', ' ').capitalize,
          'ext' => ext,
          'type' => image_exts.include?(ext) ? 'image' : 'video'
        }
      end
      
      # Sort by filename (oldest first)
      art_files.sort_by! { |f| f['filename'] }
      
      # Copy art files to the root of the destination directory
      art_files.each do |art_file|
        src = File.join(art_dir, art_file['filename'])
        dst = File.join(site.dest, art_file['filename'])
        Jekyll.logger.info "Art Gallery:", "Copying #{art_file['filename']} to #{dst}"
        FileUtils.cp(src, dst)
      end
      
      # Store in site data for use in templates
      site.data['art_files'] = art_files
    end
  end
end
