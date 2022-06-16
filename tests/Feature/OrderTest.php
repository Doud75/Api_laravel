<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Blog;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class OrderTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_an_order_can_be_stored_to_a_database()
    {
        $response = $this->post('api/blog', [
            'title' => 'un nouveau titre',
            'content' => 'un nouveau contenu'
        ]);

        $response->assertOk();
        $this->assertCount(1, Blog::all());
    }
}
