module Jekyll
  class HeaderPlugin < Plugin
    # This hook runs after the site has been generated
    Jekyll::Hooks.register :site, :post_write do |site|
      # Your logic to set headers
      set_custom_headers(site)
    end

    private

    def self.set_custom_headers(site)
      # Access the generated files and modify them as needed
      site.pages.each do |page|
        # Example: Set a custom header for all HTML pages
        page.data["headers"] ||= {}
        page.data["headers"]["Cache-Control"] = "max-age=604800, public"
      end
    end
  end
end
